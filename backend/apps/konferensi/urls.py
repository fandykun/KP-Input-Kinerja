from django.urls import path, include

from .views import KonferensiAppView, KonferensiDetailsAPIView

urlpatterns = [
    path('konferensi/', KonferensiAppView.as_view()),
    path('konferensi/<int:pk>/', KonferensiDetailsAPIView.as_view()),
]