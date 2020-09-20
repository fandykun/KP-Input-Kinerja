from django.urls import path, include

from .views import KonferensiAppView, KonferensiDetailsAPIView, KonferensiList

urlpatterns = [
    path('konferensi', KonferensiList.as_view()),
    path('konferensi/', KonferensiAppView.as_view()),
    path('konferensi/<int:pk>/', KonferensiDetailsAPIView.as_view()),
]