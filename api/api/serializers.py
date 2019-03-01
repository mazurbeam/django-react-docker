from django.contrib.auth.models import Group
from django.contrib.auth.hashers import make_password

from rest_framework import serializers
from api.models import Event, User


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'first_name', 'last_name',
                  'email', 'is_talent', 'is_buyer')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')
