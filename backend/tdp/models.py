from django.db import models
# Create your models here.

class Persona(models.Model):
    nombre = models.CharField(max_length=30)
    cargo = models.CharField(max_length=30)

class Proyecto(models.Model):
    nombre = models.CharField(max_length=30)
    descripcion = models.CharField(max_length=30)

class Flujo(models.Model):
    descripcion = models.CharField(max_length=30)
