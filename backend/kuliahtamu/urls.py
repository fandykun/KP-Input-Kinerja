from django.urls import path, include

from .views import KuliahTamuAPIView, KuliahTamuDetailsAPIView

urlpatterns = [
    path('kuliah-tamu/', KuliahTamuAPIView.as_view()),
    path('kuliah-tamu/<int:id>/', KuliahTamuDetailsAPIView.as_view()),
]