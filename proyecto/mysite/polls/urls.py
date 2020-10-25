
from django.urls import path

from . import views

app_name = 'polls'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('<int:pk>/', views.DetailView.as_view(), name='detail'),
    path('<int:pk>/results/', views.ResultsView.as_view(), name='results'),
    path('<int:question_id>/vote/', views.vote, name='vote'),

    # =======================================================================
    path('portafolio/', views.PortafolioListView.as_view(), name='portafolio'),
    path('<int:pk>/proyecto/', views.ProyectoView.as_view(), name='proyecto'),
    path('<int:pk>/sede/', views.SedeView.as_view(), name='sede'),
    path('<int:pk>/trabajo/', views.TrabajoView.as_view(), name='trabajo'),
    path('prueba/', views.PruebaView.as_view(), name='prueba'),
]