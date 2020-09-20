from django.urls import path, include

from .views import TrainingDosenAPIView, TrainingDosenDetailsAPIView, TrainingDosenList

urlpatterns = [
    path('trainingdosen', TrainingDosenList.as_view()),
    path('trainingdosen/', TrainingDosenAPIView.as_view()),
    path('trainingdosen/<int:pk>/', TrainingDosenDetailsAPIView.as_view()),
]