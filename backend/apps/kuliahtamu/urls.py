from django.urls import path, include

from .views import KuliahTamuAPIView, KuliahTamuDetailsAPIView

urlpatterns = [
    path('kuliah-tamu/', KuliahTamuAPIView.as_view()),
    path('kuliah-tamu/<int:pk>/', KuliahTamuDetailsAPIView.as_view()),
]