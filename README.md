# Alcance del proyecto
El proyecto consiste en desarrollar una plataforma web para la gestion de proyectos de network (ISO layer 3) con el framework django. 

El nombre del proyecto es: Plataforma para la Gestion de Proyectos de Red.

# definiciones
- Etapa de desarrollo: todo lo que hace el desarrollador
- etapa de produccion: evaluacion del usuario

# stakeholder
- desarrollador: trabaja el proyecto
- usuario: es quien usara el proyecto

# Entregable
- Software funcional subido en Github.
- Guía bien detallada del funcionamiento.

# Herramientas
Lenguajes de programación: 
- Python
- JavaScript

Framework
- Django
- Bootstrap (no se si es framework)

Base de datos
- SQLite (viene por defecto con Django, pero esperamos cambiarla por una mejor)

## versiones
- pip 20.0.2 
- python 3.8.10
- Ubuntu 20.04.3 LTS 64 bits
- GNOME 3.36.8

# Anotaciones diario

## 2022-02-28
- Decidí integrar toda la información en un solo sitio. Este sitio es GitHub.
- tenemos un problema claro: las librerías, lenguajes de programación, frameworks, etc. cambian constantemente. Tenemos que buscar la forma iniciar la edición del proyecto con cosas estáticas, no cambiantes. Ejemplo claro: ¿el proyecto está hecho con Python 2 o 3?

### Desde 0
Estoy volviendo a ver este proyecto después de mucho tiempo (casi dos años). Comenzare por ver como se crea un proyecto con Django.

https://www.djangoproject.com/
“DOCUMENTATION”
“Tutorials”

El siguiente link te explica como ver la versión de Python en Windows (py -V).

## 2022-03-01
Para acotar el alcance del proyecto, todo el desarrollo se hara en ubuntu

### instalando github-desktop para ubuntu
- Me guie de este tutorial para instalar github desktop pero tuve problemas a la hora de loguearme. 
- en esta pagina encontre la solución. Seguí las pautas indicadas por el usuario PaoloRanzi81 realizadas el 22 de febrero del 2021. 
- No pude concretar porque la versión que instalé previamente estaba todavía en la máquina. Así que tuve que desinstalar la versión de github destop que instalé previamente. 
- me guie de este tutorial y aplique el siguiente comando: sudo apt --purge remove github-desktop.

Con esto pidimos satisfatoriamente instalar github desktop para ubuntu.
### avanzando con django
el objetivo ahora es hacer el tutoral que viene en la pagina oficial de django

- https://www.djangoproject.com/
- “DOCUMENTATION”
- “Tutorials”

antes de lograr ello, piden tengamos venv y pip habilitados. Nos guiamos de la siguiente referencia oficial para ello

- https://www.djangoproject.com/
- “DOCUMENTATION”
- “Tutorials”
- “Quick install guide”
- “Install a official release”

para instalar pip y venv, no me guie de la guia anterior, sino que use la misma terminal. Cuando quise usar pip y venv, la misma terminal me recomendo instalar ambas librerias con los siguientes comandos:

- apt install python3.8-venv
- sudo apt install python3-pip

agregar que, estoy viendo en varias paginas que tanto pip como venv vienen instalados con la ultima version de python. Lo que podemos hacer es formatear la PC e instalar la ultima version de python y probar. Asi nos ahorramos todos estos pasos. 
### se hizo…
- se me ordenaron archivos excel. Se mejoro documentacion
- se agrego archivo startUML para mejor entendimiento
- se relaciono correctamente template con view para mejor seguimiento
### pendientes identificiados el dia de hoy
- los update no funcionan
- los create no funcionan
- los delete no funcionan
- el javascript no funciona
- eliminar imagen proyecto
- crear nuevo base template solo para create, delete y update 
- poner franja animada para template base 1
- excel exportable, de cualquier modelo, no importa esto
## 2022-03-02
- ya funciona update, create y delete
- se creo template base para create delete y update
- se creo portada
- CRUD de geojson operativo
### tareas mapeadas pendientes
- sedeDetail poner CRUD
- hacer logica if con sedeDetail para que muestre imagen solo si es que hay tareas
- hacer mas documentacion. Documentar logica de javascript.
- revisar base.html. Hacer block “documentacion” para todas las vistas. Se enviara la documentacion a esta seccion. OJO: La fuente de la documentacion esta bien definida por la seecion “entregable” de este proyecto
### documentacion
SedeDetail.html: contiene logica para template

# para hacer líneas más largas
how to change VS Code line auto wrap column when formatting dart files?

# para hacer más rápido la revisión del sqlite3
SQLite, Introducción Práctica a SQLite3

# algunos comandos de SQLite
Practical SQLite Commands That You Don't Want To Miss

# a veces JavaScript se traba. No estoy seguro si esto funcione. Validar.
Force-refreshing only JavaScript files in Firefox and Chrome F5

# documentacion
## Documentacion macro
La documentacion viene por varios frentes. Hay 3 archivos que definen clarmaente la documentacion de este proyecto:

- diagrama de flujo del proyecto.mdj
- informacion general del proyecto.docx
- varios.xlsx
## documentacion tecnica
Dentro del codigo tambien encontraremos documentacion, pero esta se diferencia de la anterior ya que es mas detallada y tecnica

Los files python usan la siguiente convencion para los comentarios Como primer nivel: 
```python
#########################################################
# DETAIL VIEWS
#########################################################
```
y como segundo nivel:

```python
# -----------------------------
# CRUD de InterfaceGeojson
# -----------------------------
```

y los archivos HTML usan el siguinete
```html
<!-- –->
```
# templates
Hablando de templates, hay tres carpetas:
- CUD: para vistas crear, update y delete
- list: para vistas list
- boostrap: para vistas detail
- principal: la vista principal del proyecto
## infomracion acerca de los html
cada HTML tiene una relacion uno a uno con las vistas. La convencion que se uso (nos guiamos de la guia oficial de django) es poner el nombre del modelo en el nombre del HTML

- “modelo”_confirm_delete.html
- “modelo”_form.html
- “modelo”_update_form.html
- “modelo”Detail.html

el HTML se traba de secciones. Definimos la siguiente forma de dividir esas secciones. Nos guiamos de la siguiente referencia oficial: 

- https://getbootstrap.com/
- dar click a “Docs”
- desplegar “Utilities”
- nos guiamos de “Spacing” “Colors” y “Shadows”

con ello creamos el siguiente codigo HTML
```html
<div class="m-5">
<div class="shadow-lg p-3 mb-5 bg-secondary rounded">
<h3 class="text-white">INFORMACION</h3>
</div>
</div>

<div class="m-5">
<!-- todo el contenido que queramos -->
</div>
```

# modelos
en el archivo excel hay que poner la relacion de estos modelos
- Proyecto
- Persona
- Trabajo
- Sede
- InterfaceGeojson

# imagenes
se usa la siguiente convencion para nombrar las imagenes:
- capa “nombre de capa”.”extension”: no estan relacionadas a ningun modelo
- trabajo “nombre del trabajo”.”extension”: estan relacionadas al modelo Trabajo 

# geojson
Geojson https://es.wikipedia.org/wiki/GeoJSON define los siguientes tipos:

- Point
- MultiPoint
- LineString
- MultiLineString
- Polygon
- MultiPolygon
- GeometryCollection

Google tiene una herramienta que permite que interactues con sus APIs. A continuacion la guia oficial:

- https://developers.google.com/
- buscar “Maps Platform” 
- ir a SDK de Maps y dar click a “JS”
- ir “Samples”
- luego a “Layers”
- finalmente “Data Layer: Styling”

Sus herramientas entiende formato gejson. Por ello tenemos que entender bien ello. A continuacion un geojson que se entrega directamente a la API de google.

Aquí un geojson que la api de google puede entender. Se ve la definicion de los tipos Point, LineString, MultiLineString y Polygon.
```geojson
{ "type": "FeatureCollection", "features": 
[

{ "type": "Feature", "properties": { "tipo_de_geojson": "SP", "color": "red", "informacion": "<li>-77.016231, -12.112729</li>"}, "geometry": { "type": "Point", "coordinates": [-77.016231, -12.112729] } }, 

{ "type": "Feature", "properties": { "tipo_de_geojson": "SL", "color": "red", "informacion": "String unico."}, "geometry": { "type": "LineString", "coordinates": [ [-77.0460123,-12.275521], [-76.996733, -12.100521], [-77.016231, -12.112729] ] } }, 

{ "type": "Feature", "properties": { "tipo_de_geojson": "ML", "color": "red", "informacion": "Conjunto de enlaces."}, "geometry": { "type": "MultiLineString", "coordinates": [ [[-77.018337, -12.117638], [-76.972305, -12.117778]], [[-76.996733, -12.100521], [-77.016231, -12.112729]] ] } }, 

{ "type": "Feature", "properties": { "tipo_de_geojson": "SG", "color": "blue", "informacion": "<li>area azul</li>"}, "geometry": { "type": "Polygon", "coordinates": [[ [-77.06003157186912, -12.047891015435393 ], [-77.06342697143555, -12.054597715392429 ], [-77.0597165831714, -12.066626815210839 ], [-77.07566142256837, -12.085705444766615 ], [-77.08310902380617, -12.08774594300533 ], [-77.12453746458371, -12.06777068417591 ], [-77.10223055402305, -12.02118063953637 ], [-77.07085736046696, -12.01880988728709 ], [-77.06256866455078, -12.028575662342247 ], [-77.06003157186912, -12.047891015435393 ] ]] } }, 

]
}
```
## ¿como generar coordenadas? 
- En el vide https://www.youtube.com/watch?v=PrxRJp-MZxk se explica como es que se puede hacer trazos en google maps y como exportarlos a KMZ. 
- En este link https://mygeodata.cloud/converter/kmz-to-json encontraras una herramienta para convertir un archivo KMZ a JSON.
- finalmente, una vez con el archivo descargado, copiamos las coordenas que ya se encuentran en formato json y lo enviamos a nuestro programa.
