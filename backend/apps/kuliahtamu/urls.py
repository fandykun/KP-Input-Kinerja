from django.urls import path, include

from rest_framework.routers import SimpleRouter

from . import views

router = SimpleRouter()
router.register('kuliah-tamu', views.KuliahTamuViewSet, basename='kuliah-tamu')

urlpatterns = [
    path('', include(router.urls)),
    path('kuliah-tamu', views.KuliahTamuList.as_view()),
    path('kuliah-tamu/<pk>/validate', views.set_validate),
]