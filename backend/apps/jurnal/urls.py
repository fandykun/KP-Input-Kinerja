from django.urls import path, include

from rest_framework.routers import SimpleRouter

from . import views

router = SimpleRouter()
router.register('jurnal', views.JurnalViewSet, basename='jurnal')

urlpatterns = [
    path('jurnal/export/', views.export_data),
    path('', include(router.urls)),
    path('jurnal', views.JurnalList.as_view(), name='Filter Jurnal API'),
    path('jurnal/<pk>/validate', views.set_validate),
]