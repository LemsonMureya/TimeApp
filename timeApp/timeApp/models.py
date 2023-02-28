from django.db import models
from django.utils.text import slugify
from django.urls import reverse

class Place(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    latitude = models.FloatField()
    longitude = models.FloatField()
    slug = models.SlugField(unique=True, blank=True, default='')
    
    def __str__(self):
            return self.name
    def save(self, *args, **kwargs):
        if not self.slug and self.name:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
