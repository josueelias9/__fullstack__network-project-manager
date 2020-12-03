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
    path('portafolio/', views.PortafolioListView.as_view(), name='portafolio'),
    path('<int:pk>/proyecto/', views.ProyectoView.as_view(), name='proyecto'),
    path('<int:pk>/sede/', views.SedeView.as_view(), name='sede'),
    path('<int:pk>/trabajo/', views.TrabajoView.as_view(), name='trabajo'),
    # CRUD Proyecto
    path('ProyectoCreate/', views.ProyectoCreate.as_view(), name='ProyectoCreate'), 
    path('<int:pk>/ProyectoUpdate/', views.ProyectoUpdate.as_view(), name='ProyectoUpdate'), 
    path('<int:pk>/ProyectoDelete/', views.ProyectoDelete.as_view(), name='ProyectoDelete'), 
    # CRUD Sede
    path('SedeCreate/', views.SedeCreate.as_view(), name='SedeCreate'), 
    path('<int:pk>/SedeUpdate/', views.SedeUpdate.as_view(), name='SedeUpdate'), 
    path('<int:pk>/SedeDelete/', views.SedeDelete.as_view(), name='SedeDelete'), 
    # CRUD Interface_geojson
    path('Interface_geojsonCreate/', views.Interface_geojsonCreate.as_view(), name='Interface_geojsonCreate'), 
    path('<int:pk>/Interface_geojsonUpdate/', views.Interface_geojsonUpdate.as_view(), name='Interface_geojsonUpdate'), 
    path('<int:pk>/Interface_geojsonDelete/', views.Interface_geojsonDelete.as_view(), name='Interface_geojsonDelete'), 
    # CRUD Trabajo
    path('TrabajoCreate/', views.TrabajoCreate.as_view(), name='TrabajoCreate'), 
    path('<int:pk>/TrabajoUpdate/', views.TrabajoUpdate.as_view(), name='TrabajoUpdate'), 
    path('<int:pk>/TrabajoDelete/', views.TrabajoDelete.as_view(), name='TrabajoDelete'), 
    # que es?
    path('hola/', views.ContactView.as_view(), name='xaaa'), 
]