from django.db import models
# Create your models here.


class Persona(models.Model):
    nombre = models.CharField(max_length=50, default='')
    cargo = models.CharField(max_length=50, default='')
    tipo = models.CharField(max_length=50, default='')

    def __str__(self):
        return self.nombre


class Proyecto(models.Model):
    fkPersona = models.IntegerField(default=0)

    cliente = models.CharField(max_length=50, default='')
    JP = models.CharField(max_length=50, default='')
    descripcion = models.CharField(max_length=50, default='')

    flujosTotal = models.IntegerField(default=0)
    flujosResueltos = models.IntegerField(default=0)

    def __str__(self):
        return self.cliente


class Flujo(models.Model):
    fkProyecto = models.CharField(max_length=50,default='')
    descripcion = models.CharField(max_length=50,default='')
    
    coordenadas = models.JSONField()
    flujo = models.JSONField()
    conexion = models.JSONField()


class Trabajo(models.Model):
    fkFlujo = models.IntegerField(default=0)
    fkPersona = models.IntegerField(default=0)

    trabajo = models.CharField(max_length=50,default='')
    responsable = models.CharField(max_length=50,default='')
    
    estado_requiere = models.IntegerField(default=0)
    estado_activo = models.IntegerField(default=0)
    estado_finalizado = models.IntegerField(default=0)
    
    informacion = models.CharField(max_length=50,default='')
    sede = models.CharField(max_length=50,default='')

    def __str__(self):
        return self.trabajo
