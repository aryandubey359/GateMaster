from django.conf import settings
from django.contrib.auth.hashers import make_password
from rest_framework import generics
from rest_framework.response import Response
from .serializers import *
import hashlib
import binascii
import os
import random
from django.core.mail import EmailMessage
from django.core.mail import send_mail

# Create your views here.


class RegistrationView(generics.CreateAPIView):
    """ Register new user """

    def post(self, request, **kwargs):
        # jwt token validation
        name = request.data.get('name')
        contact = request.data.get('contact')
        dob = request.data.get('dob')
        email = request.data.get('email')
        password = request.data.get('password')
        confirm_password = request.data.get('confirm_password')
        stream = request.data.get('stream')

        try:
            user = Registration.objects.get(email=email)
            user_serializer = RegistrationSerializer(user, many=False)
            data = user_serializer.data
            if data['email'] is not None:
                dict = {
                    "msg": "Email Already Exist"
                }
                return Response(dict)
        except:
            if (password != confirm_password):
                dict = {
                    "msg": "Wrong Password"
                }
                return Response(dict)

            salt = hashlib.sha256(os.urandom(60)).hexdigest().encode('ascii')
            pwdhash = hashlib.pbkdf2_hmac(
                'sha512', password.encode('utf-8'), salt, 100000)
            pwdhash = binascii.hexlify(pwdhash)
            password = (salt + pwdhash).decode('ascii')

            settings.user_dict = {
                'name': name,
                'contact': contact,
                'dob': dob,
                'email': email,
                'password': password,
                'confirm_password': password,
                'stream': stream
            }

            serializer = RegistrationSerializer(data=settings.user_dict)
            if serializer.is_valid():
                dict = {
                    "msg": "User Registered Successfully"
                }
                settings.otp = random.randint(100000, 999999)
                print(settings.otp)
                msg = "Your One Time Password for GateMaster Registeration\n\n Email verification code : " + \
                    str(settings.otp)
                try:
                    send_mail(
                        'GateMaster Registeration',
                        msg,
                        'gatemaster04@gmail.com',
                        [email],
                        fail_silently=False,
                    )
                except:
                    print("Sorry! Mail not sent...")

            else:
                print(serializer.errors)
                dict = {
                    "msg": "Error"
                }
            return Response(dict)

class OTPView(generics.CreateAPIView):
    def post(self, request, **kwargs):
        entered_otp = request.data.get("entered_otp")
        if(str(settings.otp) == entered_otp):
            serializer = RegistrationSerializer(data=settings.user_dict)
            if serializer.is_valid():
                serializer.save()
                print("Saved")
            else:
                print("Not Saved")
            dic = {
                "msg": "verification successfully"
            }
            print("verified")
        else:
            dic = {
                "msg": "verification unsuccessfully"
            }
            print("not verified")
            
        return Response(dic)
    

            
