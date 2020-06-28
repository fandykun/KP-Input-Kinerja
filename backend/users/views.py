from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.response import Response

# Create your views here.
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def home_view(request, *args, **kwargs):
    print(request.user)
    data = {
        'message': 'Sudah login'
    }
    return Response(data=data, status=status.HTTP_200_OK)