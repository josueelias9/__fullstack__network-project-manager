from django.contrib import admin

# Register your models here.
from .models import Persona, Proyecto, Flujo

admin.site.register(Persona)
admin.site.register(Proyecto)
admin.site.register(Flujo)
