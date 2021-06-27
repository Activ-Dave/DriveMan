from django.contrib import admin
from django.urls import path, include

from rest_framework.routers import DefaultRouter
from todo_manager.views import TodoViewSet, OpisViewSet, PracownikViewSet, TrasaViewSet, PojazdViewSet

router = DefaultRouter () 
router.register('todo', TodoViewSet)
router.register('opis', OpisViewSet)
router.register('pracownik', PracownikViewSet)
router.register('pojazd', PojazdViewSet)
router.register('trasa', TrasaViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls))
]
