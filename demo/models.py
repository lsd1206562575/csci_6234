import datetime

from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

from tyadmin_api_cli.fields import richTextField


class Symptom(models.Model):
    symptom = models.CharField(max_length=20, verbose_name="Symptom")
    time = models.DateTimeField(verbose_name="Time")
    description = models.TextField(blank=True, verbose_name="Description")

    class Meta:
        verbose_name = "Symptom"

    def __str__(self):
        return str(self.symptom)


class Medicine(models.Model):
    medicine = models.CharField(max_length=20, verbose_name="Medicine name")
    time = models.DateTimeField(verbose_name="Time")
    serving = models.TextField(blank=True, verbose_name="Serving")

    class Meta:
        verbose_name = "Medicine"

    def __str__(self):
        return str(self.medicine)


class Doctor_visit(models.Model):
    doctor_visit = models.CharField(max_length=20, verbose_name="Event")
    time = models.DateField(verbose_name="Appointment date")
    description = models.TextField(verbose_name="Description")

    class Meta:
        verbose_name = "Doctor visit"

    def __str__(self):
        return str(self.doctor_visit)


class Trip(models.Model):
    place = models.CharField(max_length=20, verbose_name="Place")
    start_time = models.DateField(verbose_name="Start date")
    end_time = models.DateField(verbose_name="End date")
    description = models.TextField(blank=True, verbose_name="Description")

    class Meta:
        verbose_name = "Trip"
        verbose_name_plural = verbose_name

    def __str__(self):
        return str(self.place)


class News_info(models.Model):
    description = models.TextField(verbose_name="Description")
    start_time = models.DateTimeField(verbose_name="Time")

    class Meta:
        verbose_name = "News"
        verbose_name_plural = verbose_name

    def __str__(self):
        return str(self.description)


class Take_out(models.Model):
    take_out = models.CharField(max_length=20, verbose_name="Take out food")
    start_time = models.DateTimeField(verbose_name="Time")
    restaurant = models.CharField(max_length=50, verbose_name="Restaurant")

    class Meta:
        verbose_name = "Take out food"

    def __str__(self):
        return str(self.take_out)


class UserProfile(AbstractUser):
    GENDER_CHOICES = (
        ("male", "male"),
        ("female", "male")
    )

    gender = models.CharField(max_length=6, verbose_name="gender", choices=GENDER_CHOICES, default="female")
    image = models.ImageField(max_length=100, verbose_name="Profile Photo")

    class Meta:
        verbose_name = "UserProfile"

    def __str__(self):
        return self.username
