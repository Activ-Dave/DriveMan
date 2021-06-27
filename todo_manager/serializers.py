from rest_framework import serializers

from todo_manager.models import Todo, Opis, Pracownik, Pojazd, Trasa

#Tworzenie klas serializujących

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'
        
class OpisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Opis
        fields = '__all__'

class PojazdSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pojazd
        fields = '__all__'

class PracownikSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pracownik
        fields = '__all__'

class TrasaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trasa
        fields = '__all__'
