from django.urls import path, include

from .views import JurnalAPIView, \
                JurnalDetailsAPIView, \
                JurnalList

urlpatterns = [
    path('jurnal', JurnalList.as_view()),
    path('jurnal/', JurnalAPIView.as_view()),
    path('jurnal/<int:pk>/', JurnalDetailsAPIView.as_view())
]
