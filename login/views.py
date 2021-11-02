from django.shortcuts import render

from django.conf import settings
from django.contrib.auth.hashers import make_password
from rest_framework import generics
from rest_framework.response import Response

# from .serializers import *;
from registration.models import *
import hashlib, binascii, os

# Create your views here.


class LoginView(generics.CreateAPIView):

    def post(self, request, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')
        dic = {
                "msg": "Wrong Password"
        }
        try:
            data = Registration.objects.get(email=email)
            settings.username = data.name
            salt = data.password[:64]
            data.password = data.password[64:]
            pwdhash = hashlib.pbkdf2_hmac('sha512', password.encode('utf-8'), salt.encode('ascii'), 100000)
            pwdhash = binascii.hexlify(pwdhash).decode('ascii')
            
            if(pwdhash == data.password):
                dic = {
                    "msg": "Login Successfull",
                    "name":settings.username
                }
        except:
            dic = {
                "msg": "Login Unsuccessfull"
            }
        return Response(dic)
