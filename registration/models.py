from django.db import models

# Create your models here.
class Registration(models.Model):
    """" Registration for all users """

    user_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    contact = models.CharField(max_length=10)
    dob = models.CharField(max_length=10)
    email = models.EmailField()
    password = models.CharField(max_length=255)
    confirm_password = models.CharField(max_length=255)
    stream = models.CharField(max_length=30)
