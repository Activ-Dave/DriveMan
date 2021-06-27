# Tworzenie modeli (tabele w bazie danych)

from django.db import models

class Opis (models.Model):
    nazwalisty = models.CharField(max_length=100)
    opislisty = models.CharField(max_length=512, blank=True, null=True )

    def __str__(self):
        return f'{self.nazwalisty} | {self.opislisty}'

class Todo (models.Model):
    task = models.ForeignKey(Opis, on_delete=models.CASCADE, default="ID")
    name = models.CharField(max_length=128)
    done = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.name} | {self.done}' 

class Pracownik(models.Model):
    imie = models.CharField(max_length=128)
    nazwisko = models.CharField(max_length=128)
    urodzony = models.CharField(max_length=128)
    telefon = models.PositiveSmallIntegerField()

    def __str__(self):
        return f'{self.imie}, {self.nazwisko} | {self.urodzony} | {self.telefon}'

class Pojazd (models.Model):
    marka = models.CharField(max_length=128)
    model = models.CharField(max_length=128)
    rejestracyjny = models.CharField(max_length=7)
    przeglad = models.CharField(max_length=128)
    uoc = models.CharField(max_length=128)

    def __str__(self):
        return f'{self.marka} : {self.model} | {self.rejestracyjny}'

class Trasa (models.Model):
    mstart = models.CharField(max_length=128)
    mstop = models.CharField(max_length=128)
    kilometry = models.PositiveSmallIntegerField ()
    dstart = models.CharField(max_length=128)
    dstop = models.CharField(max_length=128)
#    uwagi = models.CharField(max_length=500)