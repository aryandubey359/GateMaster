from django.db.models import fields
from .models import *;
from rest_framework import serializers

class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = '__all__'