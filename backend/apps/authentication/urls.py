from django.urls import path, include

from rest_framework.authtoken.views import obtain_auth_token
from .views import TestView

urlpatterns = [
    path('login/', obtain_auth_token, name='Token Authentication API'),
    path('testing-response/', TestView.as_view())
]