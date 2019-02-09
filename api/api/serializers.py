from django.contrib.auth.models import User, Group, Permission
from rest_framework import serializers
from api.models import Event, Profile

class PermissionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Permission
        fields = '__all__'


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('phone_number',)


class UserSerializer(serializers.HyperlinkedModelSerializer):
    user_permissions = PermissionSerializer(many=True, read_only=True)
    profile = ProfileSerializer()
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'username', 'email','groups', 'profile','user_permissions')
        lookup_field = 'user_permissions'

    def update(self, instance, validated_data):
        profile_data = validated_data.pop('profile')
        if profile_data:
            # instance.profile.clear()
            profile = Profile.objects.get(user=instance)
            profile.phone_number = profile_data['phone_number']
            profile.save()
        fields = instance._meta.fields
        exclude = ['profile']
        for field in fields:
            field = field.name.split('.')[-1]  # to get coulmn name
            if field in exclude:
                continue
            exec("instance.%s = validated_data.get(field, instance.%s)" % (field, field))
        instance.save()
        return instance
        # return self, instance, validated_data
        # profile.phone_number = profile_data.p


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')


class EventSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Event
        fields = ('name', 'description', 'start_time', 'end_time', 'location')