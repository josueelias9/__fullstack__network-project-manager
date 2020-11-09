function initMap() {

    // creacion del mapa
    map = new google.maps.Map(document.getElementById('map'), {
        // zoom para tener solo a Lima como vista
        zoom: 13,
        // centro en lima - peru
        center: { lng: -77.054145, lat: -12.075076 }
    });

    /* 
    carga del geoJson

    -> apla 
    definido: proyecto.html
    tipo: variable de javascript
    info: viene de la variable "prueba"
    
    -> prueba
    definido: views.py
    tipo: string de python
    */
    map.data.addGeoJson(JSON.parse(apla));

    // estilizacion del geojson cargado
    map.data.setStyle(function (feature) {
        var mi_variable = feature.getProperty('josue');
        // elementos tipo: geometria LineString
        if (mi_variable == 'sedes') {
            return {
                // propiedades fijas
                strokeWeight: 1,
                // propiedades que sacamos del mismo geojson 
                strokeColor: feature.getProperty('color')
            };
        }
        // elementos tipo: geometria Point (todos se estan yendo aqui)
        else if (mi_variable == 'punto') {
            return {
                icon: {
                    // propiedades fijas
                    path: 'M 0,0 20,-40 -20,-40 0,0 z',
                    fillOpacity: 0.8,
                    scale: 1,
                    strokeColor: 'gold',
                    strokeWeight: 5,
                    // propiedades que sacamos del mismo geojson
                    fillColor: feature.getProperty('color')
                }
            };
        }
        else {
            return {
                strokeWeight: 5,
                strokeColor: 'black'
            };
        }
    });

    // este es para poner el texto a los elementos 
    map.data.addListener("click", mapsMouseEvent => {
        var infowindow = new google.maps.InfoWindow({ content: mapsMouseEvent.feature.getProperty("texto"), position: mapsMouseEvent.latLng });
        infowindow.open(map);
    });

    // todo lo de abajo es para interactuar con google
    // array de prueba
    var wws = [];
    // cuando hay un click obtengo informacion de las coordenadas del punto
    map.addListener("click", (e) => {
        // para pilotear
        alert(e.latLng);
        // aregando informacion al arreglo wws
        wws.push([e.latLng.lng(), e.latLng.lat()]);
        // logica para obtener datos por click
        new google.maps.Marker({
            position: e.latLng,
            map: map,
        });
        map.panTo(e.latLng);
    });
    
};




