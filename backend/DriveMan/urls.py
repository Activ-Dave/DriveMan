from rest_framework.routers import DefaultRouter
from DriveMan.views import DriverVS, TourVS, SpecsVS

router = DefaultRouter()
router.register('Kierowca', DriverVS)
router.register('Pojazd', SpecsVS)
router.register('Trasy', TourVS)

urlpatterns = router.urls
