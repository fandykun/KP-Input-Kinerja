from django.urls import path, include

from .views import TrainingKaryawanAPIView, TrainingKaryawanDetailsAPIView

urlpatterns = [
    path('trainingkaryawan/', TrainingKaryawanAPIView.as_view()),
    path('trainingkaryawan/<int:pk>/', TrainingKaryawanDetailsAPIView.as_view()),
]