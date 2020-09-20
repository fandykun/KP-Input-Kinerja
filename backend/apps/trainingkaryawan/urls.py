from django.urls import path, include

from .views import TrainingKaryawanAPIView, TrainingKaryawanDetailsAPIView, TrainingKaryawanList

urlpatterns = [
    path('trainingkaryawan', TrainingKaryawanList.as_view()),
    path('trainingkaryawan/', TrainingKaryawanAPIView.as_view()),
    path('trainingkaryawan/<int:pk>/', TrainingKaryawanDetailsAPIView.as_view()),
]