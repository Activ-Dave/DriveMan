# Generated by Django 3.1.7 on 2022-06-26 19:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DriveMan', '0006_remove_car_who'),
    ]

    operations = [
        migrations.AlterField(
            model_name='specs',
            name='description',
            field=models.CharField(max_length=560, null=True),
        ),
    ]
