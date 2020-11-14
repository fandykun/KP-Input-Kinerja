from django.urls import path, include

from rest_framework.authtoken.views import obtain_auth_token
from .views import UserInfoView

urlpatterns = [
    path('login/', obtain_auth_token, name='Token Authentication API'),
    path('account/info/', UserInfoView.as_view())
]