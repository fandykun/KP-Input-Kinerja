from django.urls import path, include

from . import views

from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register('konferensi', views.KonferensiViewSet, basename='konferensi')

urlpatterns = [
    path('konferensi/export/', views.export_data),
    path('', include(router.urls)),
    path('konferensi', views.KonferensiList.as_view(), name='Filter Konferensi API'),
    path('konferensi/<pk>/validate', views.set_validate),
]