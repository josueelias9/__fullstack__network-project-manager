from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.core.paginator import Paginator
from django.utils.decorators import method_decorator
from .models import Proyecto, Trabajo, Flujo, Persona
import json

'''
Se entrega toda la informacion
'''


class PersonaView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, *args, **kwargs):
        salida = list(Persona.objects.values())
        return JsonResponse(salida, safe=False)


class ProyectoView(View):
    def get(self, request, *args, **kwargs):
        salida = list(Proyecto.objects.values())
        return JsonResponse(salida, safe=False)


class FlujoView(View):
    def get(self, request, *args, **kwargs):
        salida = list(Flujo.objects.values())
        return JsonResponse(salida, safe=False)


class TrabajoView(View):
    def get(self, request, *args, **kwargs):
        salida = list(Trabajo.objects.values())
        return JsonResponse(salida, safe=False)


'''
Se entrega la informacion en forma de pagination
'''


class ProyectoPagination(View):
    def get(self, request, *args, **kwargs):
        contact_list = Proyecto.objects.values()
        paginator = Paginator(contact_list, 4)  # Show 4 contacts per page.
        page_number = request.GET.get('page')
        page_obj = paginator.get_page(page_number)
        return JsonResponse(list(page_obj), safe=False)


class TrabajoPagination(View):
    def get(self, request, *args, **kwargs):
        contact_list = Trabajo.objects.values()
        paginator = Paginator(contact_list, 4)  # Show 4 contacts per page.
        page_number = request.GET.get('page')
        page_obj = paginator.get_page(page_number)
        return JsonResponse(list(page_obj), safe=False)


'''
vistas filtradas
'''


class PersonaFiltro(View):
    def get(self, request, *args, **kwargs):
        id_persona = request.GET.get('id')
        request.GET.get('id_flujo')
        dict_response = {}
        # if(isinstance(id_persona,int)):
        try:
            dict_response['detalle'] = list(
                Persona.objects.filter(id=int(id_persona)).values())
            dict_response['lista'] = list(
                Proyecto.objects.filter(fkPersona=int(id_persona)).values())
            dict_response['info'] = 'todo bien'
        except:
            dict_response['info'] = 'el parametro no es un numero (id)'
        return JsonResponse(dict_response)


class ProyectoFiltro(View):
    def get(self, request, *args, **kwargs):
        # obten id del URL
        id_proyecto = request.GET.get('id')
        dict_response = {}
        # validar si el parametro obtenido del URL es un numero
        try:
            dict_response['detalle'] = list(
                Proyecto.objects.filter(id=int(id_proyecto)).values())
            dict_response['lista'] = list(
                Flujo.objects.filter(fkProyecto=int(id_proyecto)).values())
            dict_response['info'] = 'todo bien'
        except:
            dict_response['info'] = 'el parametro no es un numero (id)'

        return JsonResponse(dict_response)


class FlujoFiltro(View):
    def get(self, request, *args, **kwargs):
        id_flujo = request.GET.get('id')
        dict_response = {}
        try:
            dict_response['detalle'] = list(
                Flujo.objects.filter(id=int(id_flujo)).values())
            dict_response['lista'] = list(
                Trabajo.objects.filter(fkFlujo=int(id_flujo)).values())
            dict_response['info'] = 'todo bien'
        except:
            dict_response['info'] = 'el parametro no es un numero (id)'
        return JsonResponse(dict_response)


'''
vista CRUD
'''


class PersonaCRUD(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    # C

    def post(self, request, *args, **kwargs):
        dict_request = json.loads(request.body)
        Persona.objects.create(
            nombre=dict_request['nombre'],
            cargo=dict_request['cargo'],
            tipo=dict_request['tipo'],)
        dict_response = {}
        dict_response['info'] = 'post ok'
        return JsonResponse(dict_response)
    # R

    def get(self, request, *args, **kwargs):
        dict_response = {}
        id=request.GET.get('id')
        dict_response['info'] = 'get ok!'
        dict_response['persona'] = list(
            Persona.objects.filter(id=id).values())
        return JsonResponse(dict_response)
    # U

    def put(self, request, *args, **kwargs):
        dict_request = json.loads(request.body)
        #id_a_modificar = dict_request['id']
        dict_response = {}
        dict_response['info'] = 'put ok'
        print(dict_request)
        #Persona.objects.filter(id=id_a_modificar).update(
        #    nombre=dict_request['nombre'],
        #    cargo=dict_request['cargo'],
        #    tipo=dict_request['tipo'],)
        return JsonResponse(dict_response)
    # D

    def delete(self, request, *args, **kwargs):
        dict_request = json.loads(request.body)
        Persona.objects.filter(id=dict_request['id']).delete()
        dict_response = {}
        dict_response['info'] = 'todo ok con el delete'
        return JsonResponse(dict_response)
