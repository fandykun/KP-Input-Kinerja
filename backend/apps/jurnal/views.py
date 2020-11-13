from django.shortcuts import render
from django.shortcuts import get_object_or_404

from .models import Jurnal
from .serializers import JurnalSerializer
from ..authentication.permissions import isAdminPermission

# Create your views here.
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListAPIView
from rest_framework import viewsets
from rest_framework.decorators import api_view, permission_classes

from url_filter.integrations.drf import DjangoFilterBackend

class JurnalViewSet(viewsets.ViewSet):
    parser_classes = (MultiPartParser, FormParser)

    def get_permissions(self):
        if self.action == 'destroy':
            permission_classes = [isAdminPermission]
        else:
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]

    def list(self, request):
        jurnals = Jurnal.objects.all()
        serializer = JurnalSerializer(jurnals, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = JurnalSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        queryset = Jurnal.objects.all()
        jurnal = get_object_or_404(queryset, pk=pk)
        serializer = JurnalSerializer(jurnal)
        return Response(serializer.data)

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        queryset = Jurnal.objects.all()
        jurnal = get_object_or_404(queryset, pk=pk)
        jurnal.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Validated API
@api_view(['GET', 'POST'])
@permission_classes([isAdminPermission])
def set_validate(request, pk):
    if request.method == 'POST':
        queryset = Jurnal.objects.all()
        jurnal = get_object_or_404(queryset, pk=pk)
        if not jurnal.is_validated:
            jurnal.is_validated = True
            jurnal.save()
        return Response(status=status.HTTP_200_OK)
    
# Filtering API
class JurnalList(ListAPIView):
    permission_classes = (IsAuthenticated, )
    serializer_class = JurnalSerializer
    queryset = Jurnal.objects.all()
    filter_backends = [DjangoFilterBackend]
    filter_fields = [
        'judul', 
        'author', 
        'published_at',
        'jurnal_vol',
        'jurnal_no',
        'url', 
        'tahun',
        'tingkat',
        'pi',
        'pn',
        'scopus'
    ]