from django.contrib import admin

from .models import Choice, Question, Proyecto, Sede, Servicio_tcp_ip, Equipo



class ChoiceInline(admin.TabularInline):

    model = Choice
    extra = 3


class QuestionAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,               {'fields': ['question_text']}),
        ('Date information', {'fields': ['pub_date'], 'classes': ['collapse']}),
    ]
    inlines = [ChoiceInline]
    list_display = ('question_text', 'pub_date', 'was_published_recently')
    list_filter = ['pub_date']
    search_fields = ['question_text']



# =======================================================================


class ProyectoAdmin(admin.ModelAdmin):
    list_display = (
        'nombre',
        'cliente',
        'descripcion',
        'tipo',
        'fecha_inicio',
        'fecha_fin',
        'jp',
        'ie',
        'sedes_total',
        'sedes_pendientes',
        'foto_alcance',)
    
class SedeAdmin(admin.ModelAdmin):
    list_display = (
        'llave_forenea',
        'nombre',
        'coordenada_longitud',
        'coordenada_latitud',
        'situacion',
        'contrata_equipo',
        'contrata_acceso',
        'finalizado',)


class Servicio_tcp_ipAdmin(admin.ModelAdmin):
    list_display = (
        'llave_forenea',
        'nombre_servicio',
        'avance',
        'activo_capa_fisica',
        'activo_capa_acceso',
        'activo_capa_red',
        'activo_capa_trasporte',
        'activo_capa_aplicacion',
        'estado_capa_fisica',
        'estado_capa_acceso',
        'estado_capa_red',
        'estado_capa_trasporte',
        'estado_capa_aplicacion',
        'datos_capa_fisica',
        'datos_capa_acceso',
        'datos_capa_red',
        'datos_capa_trasporte',
        'datos_capa_aplicacion',
        'responsable_capa_fisica',
        'responsable_capa_acceso',
        'responsable_capa_red',
        'responsable_capa_trasporte',
        'responsable_capa_aplicacion',)


class EquipoAdmin(admin.ModelAdmin):
    list_display = (
        'equipo',
        'coordenada_longitud',
        'coordenada_latitud',
        'datos_tecnicos',)
    
admin.site.register(Question, QuestionAdmin)
admin.site.register(Proyecto, ProyectoAdmin)
admin.site.register(Sede, SedeAdmin)
admin.site.register(Servicio_tcp_ip, Servicio_tcp_ipAdmin)
admin.site.register(Equipo, EquipoAdmin)