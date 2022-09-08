from rest_framework import serializers
from DriveMan.models import Tour, Specs
from Users.models import User

class DriverSerial (serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class TourSerial (serializers.ModelSerializer):
    class Meta:
        model = Tour
        fields = '__all__'

class SpecsSerial (serializers.ModelSerializer):
    class Meta:
        model = Specs
        fields = '__all__'

