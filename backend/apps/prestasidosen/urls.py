from django.urls import path, include

from rest_framework.routers import SimpleRouter

from . import views

router = SimpleRouter()
router.register('dosen', views.PrestasiDosenViewSet, basename='prestasi_dosen')

urlpatterns = [
    path('prestasi/', include([
        path('dosen/export/', views.export_data),
        path('', include(router.urls)),
        path('dosen', views.PrestasiDosenList.as_view(), name='Filter Prestasi Dosen API'),
        path('dosen/<pk>/validate', views.set_validate),
    ])),
]