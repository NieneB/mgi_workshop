var mystyle = {
    "version": 8,
    "name": "Mijn eigen Stijl",
    "sources": {
            "pdok": {
                "type": "vector",
                "tiles": ["http://geodata.nationaalgeoregister.nl/beta/topotiles/{z}/{x}/{y}.pbf"]
            }
    },
    "layers": [
        {
            "id": "background",
            "type": "background",
            "paint": {
                "background-color": "#FFFFFF"
            }
        },
        {
            "id": "admin",
            "type": "fill",
            "source": "pdok",
            "source-layer": "admin",
            "maxzoom": 22,
            "minzoom": 0,
            "filter": ["==", "lod1", "province"],
            "paint": {
                "fill-color": "#54D8CC",
                "fill-outline-color": "#ffffff"
            }
        },
        {
            "id": "building_extrusion",
            "type": "fill-extrusion",
            "source": "pdok",
            "source-layer":"urban",
            "maxzoom": 22,
            "minzoom": 11,
            "paint": {
                "fill-extrusion-height": 20,
                "fill-extrusion-color": "#f37788",
                "fill-extrusion-opacity": 0.9
            }
        }
    ]
};

var map = new mapboxgl.Map({
    container: 'map-container',
    style: mystyle,
    hash: true,
    zoom: 11,
    pitch: 60,
    bearing: 62.4,
    center: [4.8, 52.4]
}); 

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), "top-left");



// ADDING a GEOJSON

var geojsonpoints = {
    "type": "FeatureCollection",
    "features":
        [
        {
            "type": "Feature",
            "properties": {
                "name": "Gaia pond"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    5.6666815,
                    51.988461
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    5.66811919,
                    51.9863602
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Orion"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    5.6664562,
                    51.985058
                ]
            }
        }
    ]
};

map.on('ĺoad', function () {
    // ADD GEOJSON SOURCE
    map.addSource('punten', {
        'type': 'geojson',
        'data': geojsonpoints
    });
    // ADD an extra layer
    map.addLayer({
        'id': 'geojson-points',
        'type': 'circle',
        'source': 'punten',
        'layout':{},
        'paint': {
            'circle-color': '#000fff',
            'circle-radius': 10
        }
    });
});


