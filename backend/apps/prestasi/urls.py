from django.urls import path, include

from .views import PrestasiAPIView, PrestasiDetailsAPIView, PrestasiList

urlpatterns = [
    path('prestasi', PrestasiList.as_view()),
    path('prestasi/', PrestasiAPIView.as_view()),
    path('prestasi/<int:pk>/', PrestasiDetailsAPIView.as_view()),
]