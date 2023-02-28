from django.shortcuts import render, get_object_or_404
from timeApp.models import Place
from django.http import HttpResponseRedirect
from datetime import datetime, timedelta
import requests


def home(request):
    context = {
        'title': 'Welcome to my app',
        'message': 'This is the homepage',
    }
    return render(request, 'home.html', context)

def place_list(request):
    places = Place.objects.all()
    context = {
        'places': places
    }
    return render(request, 'place_list.html', context)


def place_detail(request, slug):
    place = get_object_or_404(Place, slug=slug)
    return render(request, 'place_detail.html', {'place': place})


def eta_calculation(request):
    if request.method == 'POST':
        # get user input
        destination = request.POST.get('destination')
        location = request.POST.get('location')

        # construct API request
        url = 'https://maps.googleapis.com/maps/api/directions/json'
        params = {
            'origin': location,
            'destination': destination,
            'key': 'AIzaSyDGH7PokiWi5eT7LMjkOcnxLxYCtGUqgNw',
        }

        # send API request and parse response
        response = requests.get(url, params=params)
        data = response.json()
        duration = data['routes'][0]['legs'][0]['duration']['text']

        # pass duration to template
        return render(request, 'result.html', {'duration': duration,'destination': destination, 'location': location })
    else:
        # If the request method is not POST, render the HTML form template
        return render(request, 'form.html')
