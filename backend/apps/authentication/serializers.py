from django.contrib.auth import password_validation

from rest_framework import serializers

from .models import User

from ..masters.serializers import (MasterMahasiswaSerializer, 
                                MasterDosenSerializer,
                                MasterTendikSerializer)

class UserSerializer(serializers.ModelSerializer):
    departemen = serializers.CharField(source='get_departemen')
    mahasiswa = MasterMahasiswaSerializer()
    dosen = MasterDosenSerializer()
    tendik = MasterTendikSerializer()

    class Meta:
        model = User
        fields = ['username', 'is_admin', 'departemen', 'mahasiswa', 'dosen', 'tendik']

class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)

    def validate_old_password(self, value):
        if not self.context['request'].user.check_password(value):
            raise serializers.ValidationError('Current password does not match')
        return value

    def validate_new_password(self, value):
        password_validation.validate_password(value)
        return value