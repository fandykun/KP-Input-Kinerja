from django.urls import path, include

from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('api/', include([
        path('auth/token/', obtain_auth_token, name='Token Authentication API'),
    ])),
]