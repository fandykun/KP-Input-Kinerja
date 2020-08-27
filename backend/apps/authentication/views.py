from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated  # <-- Here

# from .models import User

# from .serializers import UserMasterSerializer

class HelloView(APIView):
    # permission_classes = (IsAuthenticated,)             # <-- And here

    def get(self, request):
        # user = User.objects.all()
        # serializer = UserMasterSerializer(user, many=True)
        content = {'message': 'Hello, World!'}
        return Response(content)

class TestView(APIView):
    def post(self, request):
        return Response(data=request.data)
