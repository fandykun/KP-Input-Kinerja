from django.shortcuts import render

from .models import User
from .serializers import UserSerializer

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

class UserInfoView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        user = User.objects.get(username=request.user.username)
        serializer = UserSerializer(user)
        return Response(serializer.data)

class TestView(APIView):
    def get(self, request):
        print(request.user)
        return Response(data=request.data)
