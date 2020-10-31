
import datetime

from django.db import models
from django.utils import timezone


class Question(models.Model):

    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')

    def __str__(self):
        return self.question_text

    def was_published_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.pub_date <= now
    
    was_published_recently.admin_order_field = 'pub_date'
    was_published_recently.boolean = True
    was_published_recently.short_description = 'Published recently?'


class Choice(models.Model):

    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text


# =======================================================================

class Persona(models.Model):
    nombre = models.CharField(max_length=100)
    puesto = models.CharField(max_length=100)
   
    def __str__(self):
        return self.nombre



class Proyecto(models.Model):
    nombre = models.CharField(max_length=100, default='')
    cliente = models.CharField(max_length=100, default='')
    descripcion = models.CharField(max_length=100, default='')
    tipo = models.IntegerField(default=0)
    fecha_inicio = models.DateTimeField('date published')
    fecha_fin = models.DateTimeField('date published')
    jp = models.CharField(max_length=100, default='')
    ie = models.CharField(max_length=100, default='')
    sedes_total = models.IntegerField(default=0)
    sedes_pendientes = models.IntegerField(default=0)
    foto_alcance = models.ImageField(upload_to='cars',default='proyecto.jpg')
    prueba = models.TextField(default='')

    def __str__(self):
        return self.nombre



class Sede(models.Model):
    llave_forenea = models.ForeignKey(Proyecto, on_delete=models.CASCADE, default='0')
    nombre = models.CharField(max_length=100, default='')
    coordenada_longitud = models.FloatField(default=0)
    coordenada_latitud = models.FloatField(default=0)
    situacion = models.CharField(max_length=100, default='')
    contrata_equipo = models.CharField(max_length=100, default='')
    contrata_acceso = models.CharField(max_length=100, default='')
    finalizado = models.BooleanField(default=False)
    
    def __str__(self):
        return self.nombre


class Servicio_tcp_ip(models.Model):
    '''
    =======================================
    CAPA FISICA
    =======================================
    ---------
    trabajo
    ---------
    1_acceso
    1_fo_pext
    1_fo_umg
    1_fo_jumpeo_en_nodo
    1_cobre
    1_3_5_hgz
    1_3g
    1_4g
    1_vsat
    1_radioenlace
    ---------
    datos
    ---------
    potencia
    trasmision
    nodo_o_ura_cto
    nodo_o_ura_gabinete
    nodo_o_ura_bandeja_conectores
    nodo_o_ura_hilo
    =======================================
    CAP ACCESO 
    =======================================
    ---------
    trabajo
    ---------
    2_conf_de_backhoul
    2_conf_de_red_empresarial
    2_conf_de_red_metro_mpls_punto_a_punto
    2_conf_de_red_metro_mpls_punto_a_multipunto
    2_trasmisiones
    ---------
    datos
    ---------
    equipo_de_trasporte
    equipo_demarcador
    equipo_switch_lan
    VLAN_outer
    VLAN_inner
    puerto_empresarial
    puerto_metro
    =======================================
    CAPA RED
    =======================================
    ---------
    trabajo
    ---------
    3_vpn_configuracion_de_comunidades
    3_vpn_configuracion_de_caudales
    3_vpn_mpls_l3_remota
    3_vpn_mpls_l3_cabecera
    3_vpn_hop_and_spoke
    3_vpn_spoke_to_spoke
    3_vpn_q_o_s_router_ce_y_pe
    3_infointernet_cabecera
    3_infointernet_remota
    ---------
    datos
    ---------
    modelo_equipos_pe
    modelo_equipos_ce
    modelo_demarcador
    modelo_transeiver
    modelo_modem_cobre
    modelo_equipo_metro
    modelo_equipo_backhoul
    modelo_equipo_empresarial
    ip_lan
    ip_wan
    caudales
    velocidad_mbps
    =======================================
    CAPA TRASPORTE 
    =======================================
    =======================================
    CAPA APLICACION 
    =======================================
    ---------
    trabajo
    ---------
    5_solarwinds
    5_snmp
    5_sip_trunk
    5_seguridad_gestionada
    5_antiddos
    ---------
    datos
    ---------
    vrf_antiddos
    rango_numerico
    '''
    llave_forenea = models.ForeignKey(Sede, on_delete=models.CASCADE, default='0')
    nombre_servicio = models.CharField(max_length=100, default='')
    avance = models.FloatField(default=0)
    activo_capa_fisica = models.BooleanField(default=False)
    activo_capa_acceso = models.BooleanField(default=False)
    activo_capa_red = models.BooleanField(default=False)
    activo_capa_trasporte = models.BooleanField(default=False)
    activo_capa_aplicacion = models.BooleanField(default=False)
    estado_capa_fisica = models.BooleanField(default=False)
    estado_capa_acceso = models.BooleanField(default=False)
    estado_capa_red = models.BooleanField(default=False)
    estado_capa_trasporte = models.BooleanField(default=False)
    estado_capa_aplicacion = models.BooleanField(default=False)
    datos_capa_fisica = models.TextField(default='')
    datos_capa_acceso = models.TextField(default='')
    datos_capa_red = models.TextField(default='')
    datos_capa_trasporte = models.TextField(default='')
    datos_capa_aplicacion = models.TextField(default='')
    responsable_capa_fisica = models.CharField(max_length=100, default='')
    responsable_capa_acceso = models.CharField(max_length=100, default='')
    responsable_capa_red = models.CharField(max_length=100, default='')
    responsable_capa_trasporte = models.CharField(max_length=100, default='')
    responsable_capa_aplicacion = models.CharField(max_length=100, default='')
    
    def __str__(self):
        return self.nombre_servicio




class Equipo(models.Model):    
    '''
    ----------- activo
    equipo_pe
    equipo_ce
    demarcador
    recurso_empresarial
    recurso_metro
    transimision

    ----------- pasivo
    cto 
    odf (condicional: FO)
    gabinete
    armario (condicional: cobre)
    FO
    cobre
    '''
    equipo = models.CharField(
        max_length=2,
        choices=[
            ('PE','equipo_pe'),
            ('CE','equipo_ce'),
            ('DE','demarcador'),
            ('RE','recurso_empresarial'),
            ('RM','recurso_metro'),
            ('TR','transimision'),
        ],
        default='CE',)
    coordenada_longitud = models.FloatField(default=0)
    coordenada_latitud = models.FloatField(default=0)
    datos_tecnicos = models.TextField(default='')


class Interface_geojson(models.Model):
    ''''
    esta clase es para albergar la informacion de
    - puntos
    - enlaces
    P --- P --- P --- P --- P --- P
    la pregunta es, que podemos mostrar en google map?
    todo depende de los objetos GEOjson
    link: https://es.wikipedia.org/wiki/GeoJSON

    tipos de geojson
    - Point                 sede, equipo metro, PE, CE
    - MultiPoint            grupo de sedes
    - LineString            enlace logico
    - MultiLineString       enlace de FO
    - Polygon               cobertura, zonificacion de contarta
    - MultiPolygon
    - GeometryCollection

    todos los tipos de geojson tienen la siguiente estructura:
    {
        "type": "tipo_de_geojson", 
        "coordinates": "juego_de_arrays"
    }

    entonces se tendria que eliminar la clase Equipo, porque esta clase lo incluye
    '''

    tipo_de_geojson = models.CharField(
        max_length=2,
        choices=[
            ('SP', 'Point'),
            ('MP', 'MultiPoint'),
            ('SL', 'LineString'),
            ('ML', 'MultiLineString'),
            ('SG', 'Polygon'),
            ('MG', 'MultiPolygon'),
            ('GC', 'GeometryCollection'),
        ],
        default='CE',)
    # tipo_de_geojson = models.CharField(max_length=100, default='')
    informacion = models.CharField(max_length=100, default='')
    juego_de_arrays = models.TextField(default='')

