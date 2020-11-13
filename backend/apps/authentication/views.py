from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

class HelloView(APIView):
    # permission_classes = (IsAuthenticated,)             # <-- And here

    def get(self, request):
        # user = User.objects.all()
        # serializer = UserMasterSerializer(user, many=True)
        content = {'message': 'Hello, World!'}
        return Response(content)

class TestView(APIView):
    def get(self, request):
        print(request.user)
        return Response(data=request.data)
