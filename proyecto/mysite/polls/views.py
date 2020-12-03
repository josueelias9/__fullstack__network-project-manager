from django.template import loader
from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.utils import timezone
from django.core import serializers
from django.views import generic, View
from django.views.generic.list import ListView
from django.views.generic.edit import CreateView, UpdateView, DeleteView, FormView
from django.views.generic.base import TemplateView
from django.urls import reverse_lazy, reverse
import json
from .models import Choice, Question, Persona, Proyecto, Sede, Trabajo, Equipo, Interface_geojson
from .forms import ContactForm
'''
CRUD
'''
class IndexView(generic.ListView):
    template_name = 'polls/index.html'
    context_object_name = 'latest_question_list'
        
    def get_queryset(self):
        """
        Return the last five published questions (not including those set to be
        published in the future).
        """
        return Question.objects.filter(
            pub_date__lte=timezone.now()
        ).order_by('-pub_date')[:5]



class DetailView(generic.DetailView):
    model = Question
    template_name = 'polls/detail.html'

    def get_queryset(self):
        """
        Excludes any questions that aren't published yet.
        """
        return Question.objects.filter(pub_date__lte=timezone.now())


class ResultsView(generic.DetailView):
    model = Question
    template_name = 'polls/results.html'


def vote(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    try:
        selected_choice = question.choice_set.get(pk=request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        # Redisplay the question voting form.
        return render(request, 'polls/detail.html', {
            'question': question,
            'error_message': "You didn't select a choice.",
        })
    else:
        selected_choice.votes += 1
        selected_choice.save()
        # Always return an HttpResponseRedirect after successfully dealing
        # with POST data. This prevents data from being posted twice if a
        # user hits the Back button.
        return HttpResponseRedirect(reverse('polls:results', args=(question.id,)))


'''
todas las vistas
'''
class PortafolioListView(ListView):
    model = Proyecto
    paginate_by = 100  # if pagination is desired
    template_name = 'polls/portafolio.html'


class ProyectoView(generic.DetailView):
    model = Proyecto
    template_name = 'polls/proyecto.html'
    # este debe ser la funcion que integre todo
    def get_context_data(self,**kwargs):
        # el super() indica que esta obteniendo las caracteristicas de la super clase
        context = super().get_context_data(**kwargs)
        # primera parte del string
        aa = '''{
            "type": "FeatureCollection", 
            "features": [{'''
        # numero de elementos en el queryset de Interface_geojson (todos los elementos, sin filtro)
        nume = Interface_geojson.objects.all().count()
        # creamos un numero auxiliar que aumentara de uno en uno hasta llegar al valor de "nume"
        auxil = 0
        # itera sobre todos los objetos de la clase "Interface_geojson"
        for e in Interface_geojson.objects.all():
            # este if es para iterar sobre todos los elementos menos el ultimo
            if auxil + 1 < nume:
                # estas son las variables del string...
                informacion = e.informacion
                juego_de_arrays = e.juego_de_arrays
                color = e.color
                # se agregan al string
                aa = aa + '''
                    "type": "Feature", 
                    "properties": {
                        "josue": "punto", 
                        "color": "%s", 
                        "texto": "%s"},
                    %s }, {''' % (color, informacion, juego_de_arrays)
            # aumenta el valor de auxil
            auxil = auxil + 1
        # en este punto ya itere sobre todos los elementos, menos el ultimo. Eso es lo que tenemos que ver ahora
        informacion = Interface_geojson.objects.all().last().informacion
        juego_de_arrays = Interface_geojson.objects.all().last().juego_de_arrays
        color = Interface_geojson.objects.all().last().color
        aa = aa + '''
            "type": "Feature", 
            "properties": {
                "josue": "punto", 
                "color": "%s", 
                "texto": "%s"},
            %s }]}''' % (color, informacion, juego_de_arrays)
        context['prueba'] = aa
        return context


    def post(self, request, *args, **kwargs):
        return render(request, 'polls/portafolio.html')

class SedeView(generic.DetailView):
    model = Sede
    template_name = 'polls/sede.html'

class TrabajoView(generic.DetailView):
    model = Trabajo
    template_name = 'polls/trabajo.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        a = 0
        ww = self.get_object()
        if ww.activo_capa_fisica:
            a += 1 
        if ww.activo_capa_acceso:
            a += 1 
        if ww.activo_capa_red:
            a += 1 
        if ww.activo_capa_trasporte:
            a += 1 
        if ww.activo_capa_aplicacion:
            a += 1 
        ww.avance = a/5*100
        ww.save()
        context['avance'] = a/5*100
        return context
'''
CRUD
'''
# CRUD de Interface_geojson
class Interface_geojsonCreate(CreateView):
    model = Interface_geojson
    fields = '__all__'

class Interface_geojsonUpdate(UpdateView):
    model = Interface_geojson
    fields = '__all__' # ['name']
    template_name_suffix = '_update_form'

class Interface_geojsonDelete(DeleteView):
    model = Interface_geojson
    success_url = reverse_lazy('polls:Interface_geojsonCreate')

# CRUD de Proyecto
class ProyectoCreate(CreateView):
    model = Proyecto
    fields = '__all__'

class ProyectoUpdate(UpdateView):
    model = Proyecto
    fields = '__all__' # ['name']
    template_name_suffix = '_update_form'

class ProyectoDelete(DeleteView):
    model = Proyecto
    success_url = reverse_lazy('polls:ProyectoCreate')

# CRUD de Sede
class SedeCreate(CreateView):
    model = Sede
    fields = '__all__'

class SedeUpdate(UpdateView):
    model = Sede
    fields = '__all__' # ['name']
    template_name_suffix = '_update_form'
    # success_url = reverse_lazy('polls:proyecto', args=[1])

    # def get_absolute_url(self):
    #     return reverse_lazy('polls:proyecto', args=[1])

class SedeDelete(DeleteView):
    model = Sede
    success_url = reverse_lazy('polls:ProyectoCreate')


# CRUD de Trabajo
class TrabajoCreate(CreateView):
    model = Trabajo
    fields = '__all__'

class TrabajoUpdate(UpdateView):
    model = Trabajo
    fields = '__all__' # ['name']
    template_name_suffix = '_update_form'

class TrabajoDelete(DeleteView):
    model = Trabajo
    success_url = reverse_lazy('polls:ProyectoCreate')
    
'''
ver que cosa
'''
class ContactView(View):
    template_name = 'polls/contact.html'
    form_class = ContactForm
    success_url = '/thanks/'

    def form_valid(self, form):
        # This method is called when valid form data has been POSTed.
        # It should return an HttpResponse.
        form.send_email()
        return super().form_valid(form)

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)
        if form.is_valid():
            # <process form cleaned data>
            return HttpResponseRedirect('/success/')

        return render(request, self.template_name, {'form': form})