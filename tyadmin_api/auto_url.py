from tyadmin_api import auto_views
from django.urls import re_path, include, path
from rest_framework.routers import DefaultRouter
    
router = DefaultRouter(trailing_slash=False)
    
router.register('permission', auto_views.PermissionViewSet)
    
router.register('group', auto_views.GroupViewSet)
    
router.register('content_type', auto_views.ContentTypeViewSet)
    
router.register('symptom', auto_views.SymptomViewSet)
    
router.register('medicine', auto_views.MedicineViewSet)
    
router.register('doctor_visit', auto_views.Doctor_visitViewSet)
    
router.register('trip', auto_views.TripViewSet)
    
router.register('news_info', auto_views.News_infoViewSet)
    
router.register('take_out', auto_views.Take_outViewSet)
    
router.register('user_profile', auto_views.UserProfileViewSet)
    
urlpatterns = [
        re_path('^', include(router.urls)),
    ]
    