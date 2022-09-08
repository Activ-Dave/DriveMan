from django.db import models

# Create your models here.

#class Driver (User):
#    phone = models.IntegerField(default=None)
#    adress = models.CharField(max_length=120)
#domyślnie będzie dziedziczyć z app: users, models.user !

class Car (models.Model):
    carMake = models.CharField(max_length=60)
    carModel = models.CharField(max_length=60)
    carLicence = models.CharField(max_length=7)
#    who = models.ForeignKey('Users.User', on_delete=models.CASCADE, null=True)

class Tour (models.Model):
    forTour = models.CharField(max_length=60)
    toTour = models.CharField(max_length=60)
    startTour = models.DateField("")
    stopTour = models.DateField("")
    distance = models.IntegerField("")
    addTour = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-addTour',)


class Specs (Car):
    description = models.CharField(max_length=560, null=True)
    descDate = models.DateTimeField(auto_now_add=True)
#car klasa abstrakcyjna dziedzicząca po Car
