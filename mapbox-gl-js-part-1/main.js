mapboxgl.accessToken = '<accesTokenHERE>';

var map = new mapboxgl.Map({
    container: 'map-container',
    style: 'mapbox://styles/nieneb/cjg3h8yp80oi82rldxukpu0oi',
    hash: true,
    zoom: 11,
    pitch: 60,
    bearing: 62.4,
    center: [4.8, 52.4]
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), "top-left");
