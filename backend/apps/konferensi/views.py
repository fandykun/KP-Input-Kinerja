from django.shortcuts import render

from .models import Konferensi
from .serializers import KonferensiSerializers

from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class KonferensiAppView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        konf = Konferensi.objects.all()
        serializer = KonferensiSerializers(konf, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = KonferensiSerializers(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class KonferensiDetailsAPIView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = (IsAuthenticated, )

    def get_object(self, pk):
        try:
            return Konferensi.objects.get(pk=pk)
        except Konferensi.DoesNotExist:
            raise NotFound

    def get(self, request, pk):
        konf = self.get_object(pk)
        serializer = KonferensiSerializers(konf)
        return Response(serializer.data)

    def put(self, request, pk):
        konf = self.get_object(pk)
        serializer = KonferensiSerializers(konf, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        konf = self.get_object(pk)
        konf.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)