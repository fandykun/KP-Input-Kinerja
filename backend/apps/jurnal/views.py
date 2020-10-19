from django.shortcuts import render

from .models import Jurnal
from .serializers import JurnalSerializer

# Create your views here.
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListAPIView

from url_filter.integrations.drf import DjangoFilterBackend
# from django_filters.rest_framework import DjangoFilterBackend

class JurnalAPIView(APIView):
    parser_classes = (MultiPartParser, FormParser,)
    permission_classes = (IsAuthenticated, )

    def get(self, request):
        jurnals = Jurnal.objects.all()
        serializer = JurnalSerializer(jurnals, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = JurnalSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class JurnalDetailsAPIView(APIView):
    parser_classes = (MultiPartParser, FormParser,)
    permission_classes = (IsAuthenticated, )

    def get_object(self, pk):
        try:
            return Jurnal.objects.get(pk=pk)
        except Jurnal.DoesNotExist:
            raise NotFound

    def get(self, request, pk):
        jurnal = self.get_object(pk)
        serializer = JurnalSerializer(jurnal)
        return Response(serializer.data)

    def put(self, request, pk):
        jurnal = self.get_object(pk)
        serializer = JurnalSerializer(jurnal, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        jurnal = self.get_object(pk)
        jurnal.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

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