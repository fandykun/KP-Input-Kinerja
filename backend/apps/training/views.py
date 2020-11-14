from django.shortcuts import render

from .models import Training
from .serializers import TrainingSerializer

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
class TrainingAPIView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        trains_dosen = Training.objects.all()
        serializer = TrainingSerializer(trains_dosen, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TrainingSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TrainingDetailsAPIView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = (IsAuthenticated, )

    def get_object(self, pk):
        try:
            return Training.objects.get(pk=pk)
        except Training.DoesNotExist:
            raise NotFound

    def get(self, request, pk):
        train_dosen = self.get_object(pk)
        serializer = TrainingSerializer(train_dosen)
        return Response(serializer.data)

    def put(self, request, pk):
        train_dosen = self.get_object(pk)
        serializer = TrainingSerializer(train_dosen, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        train_dosen = self.get_object(pk)
        train_dosen.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class TrainingList(ListAPIView):
    permission_classes = (IsAuthenticated, )
    serializer_class = TrainingSerializer
    queryset = Training.objects.all()
    filter_backends = [DjangoFilterBackend]
    filter_fields = [
        'judul',
        'peserta',
        'jenis',
        'date_start',
        'date_end',
        'tempat',
    ]