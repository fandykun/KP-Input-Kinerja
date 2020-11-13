from django.urls import path, include

from .views import TrainingAPIView, TrainingDetailsAPIView, TrainingList

urlpatterns = [
    path('training', TrainingList.as_view()),
    path('training/', TrainingAPIView.as_view()),
    path('training/<int:pk>/', TrainingDetailsAPIView.as_view()),
]