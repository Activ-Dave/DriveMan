from rest_framework.viewsets import ModelViewSet
from DriveMan.models import  Tour, Specs
from Users.models import User
from DriveMan.serializers import DriverSerial, TourSerial, SpecsSerial

class DriverVS(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = DriverSerial
    filterset_fields = ('id',)

class TourVS(ModelViewSet):
    queryset = Tour.objects.all()
    serializer_class = TourSerial
    filterset_fields = ('startTour',)

class SpecsVS(ModelViewSet):
    queryset = Specs.objects.all()
    serializer_class = SpecsSerial
    filterset_fields = ('id',)
  
