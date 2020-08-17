from django.urls import path, include

from .views import TrainingDosenAPIView, TrainingDosenDetailsAPIView

urlpatterns = [
    path('trainingdosen/', TrainingDosenAPIView.as_view()),
    path('trainingdosen/<int:pk>/', TrainingDosenDetailsAPIView.as_view()),
]