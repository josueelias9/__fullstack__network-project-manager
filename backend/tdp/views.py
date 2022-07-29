from django.http import HttpResponse, JsonResponse
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

    def post(self, request, *args, **kwargs):
        dictEntrada = json.loads(request.body)
        print(type(dictEntrada))
        return HttpResponse(request.body)

class TrabajoView(View):
    def get(self, request, *args, **kwargs):
        salida = list(Trabajo.objects.values())
        return JsonResponse(salida, safe=False)

class FlujoView(View):
    def get(self, request, *args, **kwargs):
        salida = list(Flujo.objects.values())
        return JsonResponse(salida, safe=False)
        
class ProyectoView(View):
    def get(self, request, *args, **kwargs):
        salida = list(Proyecto.objects.values())
        return JsonResponse(salida, safe=False)
        
'''
Se entrega la informacion en forma de pagination
'''
class ProyectoPagination(View):
    def get(self, request, *args, **kwargs):        
        contact_list = Proyecto.objects.values()
        paginator = Paginator(contact_list, 4) # Show 4 contacts per page.
        page_number = request.GET.get('page')
        page_obj = paginator.get_page(page_number)
        return JsonResponse(list(page_obj), safe=False)

class TrabajoPagination(View):
    def get(self, request, *args, **kwargs):
        contact_list = Trabajo.objects.values()
        paginator = Paginator(contact_list, 4) # Show 4 contacts per page.
        page_number = request.GET.get('page')
        page_obj = paginator.get_page(page_number)
        return JsonResponse(list(page_obj), safe=False)


'''
CRUD
'''
