from django.db import models

# Create your models here.

class Event(models.Model):
    name = models.CharField(max_length=100, blank=False)
    description = models.TextField(null=True, blank=True)
    start_time = models.DateTimeField(blank=True, null=True)
    end_time = models.DateTimeField(blank=True, null=True)
    location = models.CharField(max_length=200, blank=True, default='TBA')