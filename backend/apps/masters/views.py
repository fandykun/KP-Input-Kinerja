from django.shortcuts import render

from .models import (Departemen,
                    MasterDosen,
                    MasterMahasiswa,
                    MasterTendik)

from .serializers import (DepartemenSerializer,
                        MasterDosenSerializer,
                        MasterTendikSerializer,
                        MasterMahasiswaSerializer)

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class DepartemenAPIView(APIView):
    def get(self, request):
        datas = Departemen.objects.all()
        serializer = DepartemenSerializer(datas, many=True)
        return Response(serializer.data)

class MasterDosenAPIView(APIView):
    permission_classes = (IsAuthenticated, )

    def get(self, request):
        datas = MasterDosen.objects.all()
        serializer = MasterDosenSerializer(datas, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = MasterDosenSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MasterDosenDetailsAPIView(APIView):
    permission_classes = (IsAuthenticated, )

    def get_object(self, pk):
        try:
            return MasterDosen.objects.get(pk=pk)
        except MasterDosen.DoesNotExist:
            raise NotFound
    
    def get(self, request, pk):
        data = self.get_object(pk)
        serializer = MasterDosenSerializer(data)
        return Response(serializer.data)
    
    def put(self, request, pk):
        data = self.get_object(pk)
        serializer = MasterDosenSerializer(data, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        data = self.get_object(pk)
        data.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class MasterTendikAPIView(APIView):
    permission_classes = (IsAuthenticated, )

    def get(self, request):
        datas = MasterTendik.objects.all()
        serializer = MasterTendikSerializer(datas, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = MasterTendikSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MasterTendikDetailsAPIView(APIView):
    permission_classes = (IsAuthenticated, )

    def get_object(self, pk):
        try:
            return MasterTendik.objects.get(pk=pk)
        except MasterTendik.DoesNotExist:
            raise NotFound
    
    def get(self, request, pk):
        data = self.get_object(pk)
        serializer = MasterTendikSerializer(data)
        return Response(serializer.data)
    
    def put(self, request, pk):
        data = self.get_object(pk)
        serializer = MasterTendikSerializer(data, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        data = self.get_object(pk)
        data.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class MasterMahasiswaAPIView(APIView):
    permission_classes = (IsAuthenticated, )

    def get(self, request):
        datas = MasterMahasiswa.objects.all()
        serializer = MasterMahasiswaSerializer(datas, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = MasterMahasiswaSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MasterMahasiswaDetailsAPIView(APIView):
    permission_classes = (IsAuthenticated, )

    def get_object(self, pk):
        try:
            return MasterMahasiswa.objects.get(pk=pk)
        except MasterMahasiswa.DoesNotExist:
            raise NotFound

    def get(self, request, pk):
        data = self.get_object(pk)
        serializer = MasterMahasiswaSerializer(data)
        return Response(serializer.data)

    def put(self, request, pk):
        data = self.get_object(pk)
        serializer = MasterMahasiswaSerializer(data, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        data = self.get_object(pk)
        data.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
