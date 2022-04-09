from rest_framework import serializers
from django.contrib.auth.models import Permission, Group
from django.contrib.contenttypes.models import ContentType
from demo.models import Symptom, Medicine, Doctor_visit, Trip, News_info, Take_out, UserProfile


class ContentTypeListSerializer(serializers.ModelSerializer):
    

    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = ContentType
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class ContentTypeCreateUpdateSerializer(serializers.ModelSerializer):
    
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = ContentType
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class SymptomListSerializer(serializers.ModelSerializer):
    

    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = Symptom
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class SymptomCreateUpdateSerializer(serializers.ModelSerializer):
    
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = Symptom
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class MedicineListSerializer(serializers.ModelSerializer):
    

    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = Medicine
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class MedicineCreateUpdateSerializer(serializers.ModelSerializer):
    
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = Medicine
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class Doctor_visitListSerializer(serializers.ModelSerializer):
    

    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = Doctor_visit
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class Doctor_visitCreateUpdateSerializer(serializers.ModelSerializer):
    
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = Doctor_visit
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class TripListSerializer(serializers.ModelSerializer):
    

    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = Trip
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class TripCreateUpdateSerializer(serializers.ModelSerializer):
    
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = Trip
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class News_infoListSerializer(serializers.ModelSerializer):
    

    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = News_info
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class News_infoCreateUpdateSerializer(serializers.ModelSerializer):
    
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = News_info
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class Take_outListSerializer(serializers.ModelSerializer):
    

    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = Take_out
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class Take_outCreateUpdateSerializer(serializers.ModelSerializer):
    
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = Take_out
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class PermissionListSerializer(serializers.ModelSerializer):
    

    class ContentTypeSerializer(serializers.ModelSerializer):
        ty_options_display_txt = serializers.SerializerMethodField()
        class Meta:
            model = ContentType
            fields = "__all__"
        @staticmethod
        def get_ty_options_display_txt(obj):
            return str(obj)
    content_type = ContentTypeSerializer()
    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = Permission
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class PermissionCreateUpdateSerializer(serializers.ModelSerializer):
    
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = Permission
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class GroupListSerializer(serializers.ModelSerializer):
    

    class PermissionSerializer(serializers.ModelSerializer):
        ty_options_display_txt = serializers.SerializerMethodField()
        class Meta:
            model = Permission
            fields = "__all__"
        @staticmethod
        def get_ty_options_display_txt(obj):
            return str(obj)
    permissions = PermissionSerializer(many=True)
    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = Group
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class GroupCreateUpdateSerializer(serializers.ModelSerializer):
    
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = Group
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class UserProfileListSerializer(serializers.ModelSerializer):
    

    class GroupSerializer(serializers.ModelSerializer):
        ty_options_display_txt = serializers.SerializerMethodField()
        class Meta:
            model = Group
            fields = "__all__"
        @staticmethod
        def get_ty_options_display_txt(obj):
            return str(obj)
    groups = GroupSerializer(many=True)
    class PermissionSerializer(serializers.ModelSerializer):
        ty_options_display_txt = serializers.SerializerMethodField()
        class Meta:
            model = Permission
            fields = "__all__"
        @staticmethod
        def get_ty_options_display_txt(obj):
            return str(obj)
    user_permissions = PermissionSerializer(many=True)
    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = UserProfile
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class UserProfileCreateUpdateSerializer(serializers.ModelSerializer):
    
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = UserProfile
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)
