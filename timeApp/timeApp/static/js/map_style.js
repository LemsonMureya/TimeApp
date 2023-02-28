function setMapStyle(map) {
// Add custom map styling
  map.setOptions({
  styles: [
    {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
    {
    "color": "#B1E0FF"
    }
    ]
    },
    {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
    {
    "color": "#F0F4F8"
    }
    ]
    },
    {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
    {
    "color": "#A6C1FF"
    }
    ]
    },
    {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
    {
    "color": "#5C87FF"
    },
    {
    "weight": 2
    }
    ]
    },
    {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
    {
    "color": "#FFC983"
    }
    ]
    },
    {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
    {
    "color": "#FFC983"
    }
    ]
    },
    {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
    {
    "color": "#B8B8B8"
    }
    ]
    },
    {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
    {
    "color": "#9BD1A7"
    }
    ]
    },
    {
    "elementType": "labels.text.stroke",
    "stylers": [
    {
    "visibility": "on"
    },
    {
    "color": "#FFFFFF"
    },
    {
    "weight": 3
    },
    {
    "lightness": 16
    }
    ]
    },
    {
    "elementType": "labels.text.fill",
    "stylers": [
    {
    "color": "#000000"
    },
    {
    "lightness": 30
    }
    ]
    },
    {
    "elementType": "labels.icon",
    "stylers": [
    {
    "visibility": "off"
    }
    ]
    },
    {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
    {
    "color": "#708D9C"
    },
    {
    "lightness": -10
    }
    ]
    }
    ]
  });
}
