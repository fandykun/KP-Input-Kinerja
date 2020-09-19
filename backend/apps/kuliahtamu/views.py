from django.shortcuts import render

from .models import KuliahTamu
from .serializers import KuliahTamuSerializer

from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListAPIView

from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.
class KuliahTamuAPIView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        kultams = KuliahTamu.objects.all()
        serializer = KuliahTamuSerializer(kultams, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = KuliahTamuSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class KuliahTamuDetailsAPIView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = (IsAuthenticated, )

    def get_object(self, pk):
        try:
            return KuliahTamu.objects.get(pk=pk)
        except KuliahTamu.DoesNotExist:
            raise NotFound

    def get(self, request, pk):
        kultam = self.get_object(pk)
        serializer = KuliahTamuSerializer(kultam)
        return Response(serializer.data)

    def put(self, request, pk):
        kultam = self.get_object(pk)
        serializer = KuliahTamuSerializer(kultam, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        kultam = self.get_object(pk)
        kultam.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Filtering API
class KuliahTamuList(ListAPIView):
    serializer_class = KuliahTamuSerializer
    queryset = KuliahTamu.objects.all()
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['topik', 'pemateri', 'institusi' ]