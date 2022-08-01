"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from .views import PersonaView, ProyectoView, FlujoView, TrabajoView
from .views import ProyectoPagination, TrabajoPagination
from .views import PersonaFiltro, ProyectoFiltro, FlujoFiltro
from .views import PersonaCRUD
urlpatterns = [
    # retorna tola la base de datos por modelo
    path('PersonaView', PersonaView.as_view(), name='prueba'),
    path('ProyectoView', ProyectoView.as_view(), name='prueba'),
    path('FlujoView', FlujoView.as_view(), name='prueba'),
    path('TrabajoView', TrabajoView.as_view(), name='prueba'),
    # retorna segun paginacion
    path('ProyectoPagination', ProyectoPagination.as_view(), name='prueba'),
    path('TrabajoPagination', TrabajoPagination.as_view(), name='prueba'),
    # filtra por id el modelo
    path('PersonaFiltro',PersonaFiltro.as_view(),name='prueba'),
    path('ProyectoFiltro',ProyectoFiltro.as_view(),name='prueba'),
    path('FlujoFiltro',FlujoFiltro.as_view(),name='prueba'),
    # para el crud
    path('PersonaCRUD',PersonaCRUD.as_view(),name='prueba')

]
