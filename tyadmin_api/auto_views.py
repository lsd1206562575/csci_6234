
from rest_framework import viewsets
from tyadmin_api.custom import XadminViewSet
from django.contrib.auth.models import Permission, Group
from django.contrib.contenttypes.models import ContentType
from demo.models import Symptom, Medicine, Doctor_visit, Trip, News_info, Take_out, UserProfile

from tyadmin_api.auto_serializers import PermissionListSerializer, GroupListSerializer, ContentTypeListSerializer, SymptomListSerializer, MedicineListSerializer, Doctor_visitListSerializer, TripListSerializer, News_infoListSerializer, Take_outListSerializer, UserProfileListSerializer
from tyadmin_api.auto_serializers import PermissionCreateUpdateSerializer, GroupCreateUpdateSerializer, ContentTypeCreateUpdateSerializer, SymptomCreateUpdateSerializer, MedicineCreateUpdateSerializer, Doctor_visitCreateUpdateSerializer, TripCreateUpdateSerializer, News_infoCreateUpdateSerializer, Take_outCreateUpdateSerializer, UserProfileCreateUpdateSerializer
from tyadmin_api.auto_filters import PermissionFilter, GroupFilter, ContentTypeFilter, SymptomFilter, MedicineFilter, Doctor_visitFilter, TripFilter, News_infoFilter, Take_outFilter, UserProfileFilter

    
class PermissionViewSet(XadminViewSet):
    serializer_class = PermissionListSerializer
    queryset = Permission.objects.all().order_by('-pk')
    filter_class = PermissionFilter
    search_fields = ["name","codename"]

    def get_serializer_class(self):
        if self.action == "list":
            return PermissionListSerializer
        else:
            return PermissionCreateUpdateSerializer

    
class GroupViewSet(XadminViewSet):
    serializer_class = GroupListSerializer
    queryset = Group.objects.all().order_by('-pk')
    filter_class = GroupFilter
    search_fields = ["name"]

    def get_serializer_class(self):
        if self.action == "list":
            return GroupListSerializer
        else:
            return GroupCreateUpdateSerializer

    
class ContentTypeViewSet(XadminViewSet):
    serializer_class = ContentTypeListSerializer
    queryset = ContentType.objects.all().order_by('-pk')
    filter_class = ContentTypeFilter
    search_fields = ["app_label","model"]

    def get_serializer_class(self):
        if self.action == "list":
            return ContentTypeListSerializer
        else:
            return ContentTypeCreateUpdateSerializer

    
class SymptomViewSet(XadminViewSet):
    serializer_class = SymptomListSerializer
    queryset = Symptom.objects.all().order_by('-pk')
    filter_class = SymptomFilter
    search_fields = ["symptom"]

    def get_serializer_class(self):
        if self.action == "list":
            return SymptomListSerializer
        else:
            return SymptomCreateUpdateSerializer

    
class MedicineViewSet(XadminViewSet):
    serializer_class = MedicineListSerializer
    queryset = Medicine.objects.all().order_by('-pk')
    filter_class = MedicineFilter
    search_fields = ["medicine"]

    def get_serializer_class(self):
        if self.action == "list":
            return MedicineListSerializer
        else:
            return MedicineCreateUpdateSerializer

    
class Doctor_visitViewSet(XadminViewSet):
    serializer_class = Doctor_visitListSerializer
    queryset = Doctor_visit.objects.all().order_by('-pk')
    filter_class = Doctor_visitFilter
    search_fields = ["doctor_visit"]

    def get_serializer_class(self):
        if self.action == "list":
            return Doctor_visitListSerializer
        else:
            return Doctor_visitCreateUpdateSerializer

    
class TripViewSet(XadminViewSet):
    serializer_class = TripListSerializer
    queryset = Trip.objects.all().order_by('-pk')
    filter_class = TripFilter
    search_fields = ["place"]

    def get_serializer_class(self):
        if self.action == "list":
            return TripListSerializer
        else:
            return TripCreateUpdateSerializer

    
class News_infoViewSet(XadminViewSet):
    serializer_class = News_infoListSerializer
    queryset = News_info.objects.all().order_by('-pk')
    filter_class = News_infoFilter
    search_fields = []

    def get_serializer_class(self):
        if self.action == "list":
            return News_infoListSerializer
        else:
            return News_infoCreateUpdateSerializer

    
class Take_outViewSet(XadminViewSet):
    serializer_class = Take_outListSerializer
    queryset = Take_out.objects.all().order_by('-pk')
    filter_class = Take_outFilter
    search_fields = ["take_out","restaurant"]

    def get_serializer_class(self):
        if self.action == "list":
            return Take_outListSerializer
        else:
            return Take_outCreateUpdateSerializer

    
class UserProfileViewSet(XadminViewSet):
    serializer_class = UserProfileListSerializer
    queryset = UserProfile.objects.all().order_by('-pk')
    filter_class = UserProfileFilter
    search_fields = ["password","username","first_name","last_name","email","gender"]

    def get_serializer_class(self):
        if self.action == "list":
            return UserProfileListSerializer
        else:
            return UserProfileCreateUpdateSerializer
