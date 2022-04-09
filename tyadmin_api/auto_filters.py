from django_filters import rest_framework as filters
from tyadmin_api.custom import DateFromToRangeFilter
from django.contrib.auth.models import Permission, Group
from django.contrib.contenttypes.models import ContentType
from demo.models import Symptom, Medicine, Doctor_visit, Trip, News_info, Take_out, UserProfile

class PermissionFilter(filters.FilterSet):
    content_type_text = filters.CharFilter(field_name="content_type")

    class Meta:
        model = Permission
        exclude = []

class GroupFilter(filters.FilterSet):

    class Meta:
        model = Group
        exclude = []

class ContentTypeFilter(filters.FilterSet):

    class Meta:
        model = ContentType
        exclude = []

class SymptomFilter(filters.FilterSet):
    time = DateFromToRangeFilter(field_name="time")

    class Meta:
        model = Symptom
        exclude = []

class MedicineFilter(filters.FilterSet):
    time = DateFromToRangeFilter(field_name="time")

    class Meta:
        model = Medicine
        exclude = []

class Doctor_visitFilter(filters.FilterSet):

    class Meta:
        model = Doctor_visit
        exclude = []

class TripFilter(filters.FilterSet):

    class Meta:
        model = Trip
        exclude = []

class News_infoFilter(filters.FilterSet):
    start_time = DateFromToRangeFilter(field_name="start_time")

    class Meta:
        model = News_info
        exclude = []

class Take_outFilter(filters.FilterSet):
    start_time = DateFromToRangeFilter(field_name="start_time")

    class Meta:
        model = Take_out
        exclude = []

class UserProfileFilter(filters.FilterSet):
    last_login = DateFromToRangeFilter(field_name="last_login")
    date_joined = DateFromToRangeFilter(field_name="date_joined")

    class Meta:
        model = UserProfile
        exclude = ["image","image"]