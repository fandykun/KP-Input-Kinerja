from django.shortcuts import render

from .models import TrainingKaryawan
from .serializers import TrainingKaryawanSerializer

from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class TrainingKaryawanAPIView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        trains_Karyawan = TrainingKaryawan.objects.all()
        serializer = TrainingKaryawanSerializer(trains_Karyawan, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TrainingKaryawanSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TrainingKaryawanDetailsAPIView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = (IsAuthenticated, )

    def get_object(self, pk):
        try:
            return TrainingKaryawan.objects.get(pk=pk)
        except TrainingKaryawan.DoesNotExist:
            raise NotFound

    def get(self, request, pk):
        train_Karyawan = self.get_object(pk)
        serializer = TrainingKaryawanSerializer(train_Karyawan)
        return Response(serializer.data)

    def put(self, request, pk):
        train_Karyawan = self.get_object(pk)
        serializer = TrainingKaryawanSerializer(train_Karyawan, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        train_Karyawan = self.get_object(pk)
        train_Karyawan.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)