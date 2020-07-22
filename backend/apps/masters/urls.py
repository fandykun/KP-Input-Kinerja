from django.urls import path, include

from .views import (DepartemenAPIView,
                    MasterDosenAPIView,
                    MasterDosenDetailsAPIView,
                    MasterTendikAPIView,
                    MasterTendikDetailsAPIView,
                    MasterMahasiswaAPIView,
                    MasterMahasiswaDetailsAPIView)

urlpatterns = [
    path('departemen/', DepartemenAPIView.as_view()),
    path('master/', include([
        path('dosen/', MasterDosenAPIView.as_view()),
        path('dosen/<int:pk>/', MasterDosenDetailsAPIView.as_view()),
        path('tendik/', MasterTendikAPIView.as_view()),
        path('tendik/<int:pk>/', MasterTendikDetailsAPIView.as_view()),
        path('mahasiswa/', MasterMahasiswaAPIView.as_view()),
        path('mahasiswa/<int:pk>/', MasterMahasiswaDetailsAPIView.as_view()),
    ])),
]