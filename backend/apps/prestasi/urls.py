from django.urls import path, include

from rest_framework.routers import SimpleRouter

from . import views

router = SimpleRouter()
router.register('prestasi', views.PrestasiViewSet, basename='prestasi')

urlpatterns = [
    path('prestasi/export/', views.export_data),
    path('', include(router.urls)),
    path('prestasi', views.PrestasiList.as_view(), name='Filter Prestasi API'),
    path('prestasi/<pk>/validate', views.set_validate),
]