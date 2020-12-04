from rest_framework import serializers

from .models import Sertifikasi

class SertifikasiSerializer(serializers.ModelSerializer):

    class Meta:
        model = Sertifikasi
        fields = '__all__'
        read_only_fields = ['is_validated']