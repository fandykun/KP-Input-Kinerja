from django.urls import path, include

from .views import TrainingAPIView, TrainingDetailsAPIView, TrainingList
from . import views

urlpatterns = [
    path('training/export/', views.export_data),
    path('training', TrainingList.as_view()),
    path('training/', TrainingAPIView.as_view()),
    path('training/<int:pk>/', TrainingDetailsAPIView.as_view()),
    path('training/<pk>/validate', views.set_validate),
]