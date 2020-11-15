from django.urls import path, include

from rest_framework.authtoken.views import obtain_auth_token
from .views import custom_auth_token
from .views import UserInfoView
from .views import AllNonValidateView

urlpatterns = [
    path('login/', custom_auth_token, name='Token Authentication API'),
    path('account/info/', UserInfoView.as_view()),
    path('submission/', AllNonValidateView.as_view())
]