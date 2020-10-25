function initMap() {

    // creacion del mapa
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        // centar en lima - peru
        center: { lng: -77.054145, lat: -12.075076 }
    });

    // carga del geoJson
    map.data.addGeoJson(JSON.parse(apla));

    // estilizacion del geojson cargado
    map.data.setStyle(function (feature) {
        var mi_variable = feature.getProperty('josue');
        var hola = 'red';
        // elementos tipo: geometria LineString
        if (mi_variable == 'sedes') {
            hola = 'blue';
            return {
                strokeWeight: 5,
                strokeColor: feature.getProperty('color')
            };
        }
        // elementos tipo: geometria Point
        else if (mi_variable == 'punto') {
            return {
                icon: {
                    path: 'M 0,0 20,-40 -20,-40 0,0 z',
                    fillColor: feature.getProperty('color'),
                    fillOpacity: 0.8,
                    scale: 1,
                    strokeColor: 'gold',
                    strokeWeight: 5
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
    // dinamica 
    map.data.addListener("click", mapsMouseEvent => {
        var infowindow = new google.maps.InfoWindow({ content: mapsMouseEvent.feature.getProperty("texto"), position: mapsMouseEvent.latLng });
        infowindow.open(map);
    });



    /*
    var map = new google.maps.Map(

               
        document.getElementById('map'),
        {
            zoom: 13,
            center: {
                lat: -12.056460,
                lng: -77.061432
            }
        }
    );
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var markers = casa_1().map(
        function (location, i) {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
        }
    );
    var markerCluster = new MarkerClusterer(
        map,
        markers,
        {
            imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
        });



    
 
   const flightPlanCoordinates = casa_1();
   const flightPath = new google.maps.Polyline({
       path: flightPlanCoordinates,
       geodesic: true,
       strokeColor: "#FF0000",
       strokeOpacity: 1.0,
       strokeWeight: 2
   });
   flightPath.setMap(map);
*/
};

function casa_1() {
    var casa = JSON.parse(apla);
    alert(casa.type);
    arreglo = [];
    for (var i = 0; i < casa.length; i++) {
        arreglo.push({
            lat: casa[i].fields.coordenada_latitud,
            lng: casa[i].fields.coordenada_longitud
        });
    }
    return arreglo;
};


