from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save
from django.dispatch import receiver
# Create your models here.


class User(AbstractUser):
    is_talent = models.BooleanField(default=False)
    is_buyer = models.BooleanField(default=False)
    is_trusted = models.BooleanField(default=False)


class Event(models.Model):
    name = models.CharField(max_length=100, blank=False)
    description = models.TextField(null=True, blank=True)
    start_time = models.DateTimeField(blank=True, null=True)
    end_time = models.DateTimeField(blank=True, null=True)
    location = models.CharField(max_length=200, blank=True, default='TBA')
