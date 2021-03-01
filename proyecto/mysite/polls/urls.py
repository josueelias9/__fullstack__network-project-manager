from django.urls import path

from . import views

app_name = 'polls'
urlpatterns = [
    # los del ejemplo
    path('', views.IndexView.as_view(), name='index'),
    path('<int:pk>/', views.DetailView.as_view(), name='detail'),
    path('<int:pk>/results/', views.ResultsView.as_view(), name='results'),
    path('<int:question_id>/vote/', views.vote, name='vote'),
    # vistas primera fase
    path('interfaceGeojson/', views.InterfaceGeojsonListView.as_view(), name='interfaceGeojson'),
    path('portafolio/', views.PortafolioListView.as_view(), name='portafolio'),
    path('<int:pk>/proyecto/', views.ProyectoView.as_view(), name='proyecto'),
    path('<int:pk>/sede/', views.SedeView.as_view(), name='sede'),
    path('<int:pk>/trabajo/', views.TrabajoView.as_view(), name='trabajo'),
    # CRUD Proyecto
    path('proyectoCreate/', views.ProyectoCreate.as_view(), name='proyectoCreate'), 
    path('<int:pk>/proyectoUpdate/', views.ProyectoUpdate.as_view(), name='proyectoUpdate'), 
    path('<int:pk>/proyectoDelete/', views.ProyectoDelete.as_view(), name='proyectoDelete'), 
    # CRUD Sede
    path('sedeCreate/', views.SedeCreate.as_view(), name='sedeCreate'), 
    path('<int:pk>/sedeUpdate/', views.SedeUpdate.as_view(), name='sedeUpdate'), 
    path('<int:pk>/sedeDelete/', views.SedeDelete.as_view(), name='sedeDelete'), 
    # CRUD InterfaceGeojson
    path('interfaceGeojsonCreate/', views.InterfaceGeojsonCreate.as_view(), name='interfaceGeojsonCreate'), 
    path('<int:pk>/interfaceGeojsonUpdate/', views.InterfaceGeojsonUpdate.as_view(), name='interfaceGeojsonUpdate'), 
    path('<int:pk>/interfaceGeojsonDelete/', views.InterfaceGeojsonDelete.as_view(), name='interfaceGeojsonDelete'), 
    # CRUD Trabajo
    path('trabajoCreate/', views.TrabajoCreate.as_view(), name='trabajoCreate'), 
    path('<int:pk>/trabajoUpdate/', views.TrabajoUpdate.as_view(), name='trabajoUpdate'), 
    path('<int:pk>/trabajoDelete/', views.TrabajoDelete.as_view(), name='trabajoDelete'), 
    # que es?
    path('hola/', views.ContactView.as_view(), name='xaaa'), 
]