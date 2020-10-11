from django.shortcuts import render

from .models import Prestasi
from .serializers import PrestasiSerializer

from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListAPIView

from url_filter.integrations.drf import DjangoFilterBackend
# from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.
class PrestasiAPIView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        achievements = Prestasi.objects.all()
        serializer = PrestasiSerializer(achievements, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PrestasiSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PrestasiDetailsAPIView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = (IsAuthenticated, )

    def get_object(self, pk):
        try:
            return Prestasi.objects.get(pk=pk)
        except Prestasi.DoesNotExist:
            raise NotFound

    def get(self, request, pk):
        achievement = self.get_object(pk)
        serializer = PrestasiSerializer(achievement)
        return Response(serializer.data)

    def put(self, request, pk):
        achievement = self.get_object(pk)
        serializer = PrestasiSerializer(achievement, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        achievement = self.get_object(pk)
        achievement.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Filtering API
class PrestasiList(ListAPIView):
    permission_classes = (IsAuthenticated, )
    serializer_class = PrestasiSerializer
    queryset = Prestasi.objects.all()
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['name', 'lomba', 'tingkat', 'peringkat']

        
    