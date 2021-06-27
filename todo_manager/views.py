from rest_framework.viewsets import ModelViewSet
from todo_manager.models import Todo, Opis, Pracownik, Trasa, Pojazd
from todo_manager.serializers import TodoSerializer, OpisSerializer, TrasaSerializer, PracownikSerializer, PojazdSerializer

# Tworzy widok reprezentacji Serializera

class TodoViewSet (ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer 

class OpisViewSet (ModelViewSet):
    queryset = Opis.objects.all() 
    serializer_class = OpisSerializer

class PojazdViewSet (ModelViewSet):
    queryset = Pojazd.objects.all()
    serializer_class = PojazdSerializer

class PracownikViewSet (ModelViewSet):
    queryset = Pracownik.objects.all()
    serializer_class = PracownikSerializer 

class TrasaViewSet (ModelViewSet):
    queryset = Trasa.objects.all()
    serializer_class = TrasaSerializer  