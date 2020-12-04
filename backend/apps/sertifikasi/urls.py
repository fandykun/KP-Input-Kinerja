from django.urls import path, include

from rest_framework.routers import SimpleRouter

from . import views

router = SimpleRouter()
router.register('sertifikasi', views.SertifikasiViewSet, basename='sertifikasi')

urlpatterns = [
    path('sertifikasi/export/', views.export_data),
    path('', include(router.urls)),
    path('sertifikasi', views.SertifikasiList.as_view(), name='Filter Sertifikasi API'),
    path('sertifikasi/<pk>/validate', views.set_validate),
]