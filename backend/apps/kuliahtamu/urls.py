from django.urls import path, include

from .views import KuliahTamuAPIView, KuliahTamuDetailsAPIView, KuliahTamuList

urlpatterns = [
    path('kuliah-tamu', KuliahTamuList.as_view()),
    path('kuliah-tamu/', KuliahTamuAPIView.as_view()),
    path('kuliah-tamu/<int:pk>/', KuliahTamuDetailsAPIView.as_view()),
]