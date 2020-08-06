from django.urls import path, include

from .views import PrestasiAPIView, PrestasiDetailsAPIView

urlpatterns = [
    path('prestasi/', PrestasiAPIView.as_view()),
    path('prestasi/<int:pk>/', PrestasiDetailsAPIView.as_view()),
]