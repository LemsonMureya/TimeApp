function calculateETA() {
    var origin = document.getElementById('origin').value;
    var destination = document.getElementById('destination').value;

    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
      origins: [origin],
      destinations: [destination],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.IMPERIAL,
    }, function(response, status) {
      if (status === 'OK') {
        var results = response.rows[0].elements;
        var duration = results[0].duration.text;
        alert('The estimated travel time is ' + duration);
      } else {
        alert('Error: ' + status);
      }
    });
  }
