from django.shortcuts import render

from .models import KuliahTamu
from .serializers import KuliahTamuSerializer

from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

# Create your views here.
class KuliahTamuAPIView(APIView):
    parser_classes = (MultiPartParser, FormParser)
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
    def get_object(self, id):
        try:
            return KuliahTamu.objects.get(id=id)
        except KuliahTamu.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, id):
        kultam = self.get_object(id)
        serializer = KuliahTamuSerializer(kultam)
        return Response(serializer.data)

    def put(self, request, id):
        kultam = self.get_object(id)
        serializer = KuliahTamuSerializer(kultam, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        kultam = self.get_object(id)
        kultam.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)