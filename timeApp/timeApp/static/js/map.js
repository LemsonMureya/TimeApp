// function initMap() {
//   console.log("init ran")
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 13,
//     center: {lat: 37.7749, lng: -122.4194} // default map center
//   });
//
//   // Call setMapStyle() to add custom map styling
//   setMapStyle(map);
//
//   // Create the origin and destination autocomplete inputs
//   var originAutocomplete = new google.maps.places.Autocomplete(
//       document.getElementById('origin'));
//   var destinationAutocomplete = new google.maps.places.Autocomplete(
//       document.getElementById('destination'));
//
//   // Set the origin and destination fields to have autocomplete functionality
//   originAutocomplete.setFields(['address_component']);
//   destinationAutocomplete.setFields(['address_component']);
//
//   // Create the directions service and display objects
//   var directionsService = new google.maps.DirectionsService();
//   var directionsDisplay = new google.maps.DirectionsRenderer();
//
//   // Set the directions display to the map
//   directionsDisplay.setMap(map);
//
//   // Add a listener to calculate and display the route when the user submits the form
//   document.getElementById('submit').addEventListener('click', function() {
//     let s = calculateAndDisplayRoute(directionsService, directionsDisplay);
//     console.log("after submit");
//   });
// }
//
// function calculateAndDisplayRoute(directionsService, directionsDisplay) {
//   console.log("calculateAndDisplayRoute ran")
//   var origin = document.getElementById('origin').value;
//   var destination = document.getElementById('destination').value;
//
//   var request = {
//     origin: origin,
//     destination: destination,
//     travelMode: 'DRIVING'
//   };
//
//   directionsService.route(request, function(result, status) {
//     if (status === 'OK') {
//       directionsDisplay.setDirections(result);
//
//       // Get the estimated travel time in seconds
//       var travelTimeInSeconds = result.routes[0].legs[0].duration.value;
//
//       // Convert seconds to minutes and seconds
//       var minutes = Math.floor(travelTimeInSeconds / 60);
//       var seconds = travelTimeInSeconds % 60;
//       var eta = minutes + " min " + seconds + " sec";
//
//       // Show the ETA in the output
//       document.getElementById("output").innerHTML =
//         "Estimated time of arrival: " + eta;
//
//     } else {
//       window.alert('Directions request failed due to ' + status);
//     }
//   });
// }

// Version 222222
// // Initialize the map with custom styling
// function initMap() {
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 13,
//     center: {lat: 37.7749, lng: -122.4194} // default map center
//   });
//
//   // Call setMapStyle() to add custom map styling
//   setMapStyle(map);
//
//   // Initialize the Autocomplete inputs for origin and destination
//   var originAutocomplete = new google.maps.places.Autocomplete(document.getElementById('origin'));
//   var destinationAutocomplete = new google.maps.places.Autocomplete(document.getElementById('destination'));
//
//   // Bind the Autocomplete inputs to the map to improve results
//   originAutocomplete.bindTo('bounds', map);
//   destinationAutocomplete.bindTo('bounds', map);
//
//   // Create a DirectionsService and DirectionsRenderer object
//   var directionsService = new google.maps.DirectionsService();
//   var directionsRenderer = new google.maps.DirectionsRenderer({
//     map: map,
//     suppressMarkers: true
//   });
//
//   // Add a listener to re-calculate the route when the user changes the origin or destination
//   originAutocomplete.addListener('place_changed', function() {
//     calculateAndDisplayRoute(directionsService, directionsRenderer, originAutocomplete, destinationAutocomplete);
//   });
//   destinationAutocomplete.addListener('place_changed', function() {
//     calculateAndDisplayRoute(directionsService, directionsRenderer, originAutocomplete, destinationAutocomplete);
//   });
// }
//
// // Calculate and display the route on the map
// function calculateAndDisplayRoute(directionsService, directionsRenderer, originAutocomplete, destinationAutocomplete) {
//   // Get the origin and destination places from the Autocomplete inputs
//   var originPlace = originAutocomplete.getPlace();
//   var destinationPlace = destinationAutocomplete.getPlace();
//
//   // Check if the origin and destination are valid places
//   if (!originPlace || !destinationPlace) {
//     window.alert('Please enter valid origin and destination addresses.');
//     return;
//   }
//
//   // Create a DirectionsRequest object with the origin and destination places
//   var request = {
//     origin: originPlace.formatted_address,
//     destination: destinationPlace.formatted_address,
//     travelMode: 'DRIVING'
//   };
//
//   // Call the DirectionsService to get the route
//   directionsService.route(request, function(result, status) {
//     if (status === 'OK') {
//       // Display the route on the map using the DirectionsRenderer object
//       directionsRenderer.setDirections(result);
//
//       // Get the estimated travel time in seconds
//       var travelTimeInSeconds = result.routes[0].legs[0].duration.value;
//
//       // Convert seconds to minutes and seconds
//       var minutes = Math.floor(travelTimeInSeconds / 60);
//       var seconds = travelTimeInSeconds % 60;
//       var eta = minutes + " min " + seconds + " sec";
//
//       // Show the ETA in the output
//       document.getElementById("output").innerHTML =
//         "Estimated time of arrival: " + eta;
//
//     } else {
//       window.alert('Directions request failed due to ' + status);
//     }
//   });
// }

var originAutocomplete, destinationAutocomplete;

function initMap() {
  console.log("initMap() called!");
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 37.7749, lng: -122.4194} // default map center
  });

  // Create the origin and destination autocomplete inputs
  originAutocomplete = new google.maps.places.Autocomplete(
      document.getElementById('origin'));
  destinationAutocomplete = new google.maps.places.Autocomplete(
      document.getElementById('destination'));

  // Create the directions service and display objects
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();

  // Set the directions display to the map
  directionsDisplay.setMap(map);

  // Add a listener to calculate and display the route when the user submits the form
  window.onload = function() {
    document.getElementById('submit').addEventListener('click', function() {
      calculateAndDisplayRoute(directionsService, directionsDisplay);
    });
  };

  // Call setMapStyle() to add custom map styling
  setMapStyle(map);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  console.log("calculateAndDisplayRoute() called!");
  var origin = document.getElementById('origin').value;
  var destination = document.getElementById('destination').value;

  var request = {
    origin: origin,
    destination: destination,
    travelMode: 'DRIVING'
  };

  directionsService.route(request, function(result, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(result);

      // Get the estimated travel time in seconds
      var travelTimeInSeconds = result.routes[0].legs[0].duration.value;

      // Convert seconds to minutes and seconds
      var minutes = Math.floor(travelTimeInSeconds / 60);
      var seconds = travelTimeInSeconds % 60;
      var eta = minutes + " min " + seconds + " sec";

      console.log("ETA calculated:", eta);  // added this line

      // Show the ETA in the output
      document.getElementById("output").innerHTML =
        "Estimated time of arrival: " + eta;

    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}
