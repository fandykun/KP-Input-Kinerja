from rest_framework import serializers

from .models import PrestasiDosen

class PrestasiDosenSerializer(serializers.ModelSerializer):
  nama = serializers.CharField(source='get_nama', read_only=True)
  NIP = serializers.CharField(source='get_NIP', read_only=True)
  departemen = serializers.CharField(source='get_departemen', read_only=True)

  class Meta:
    model = PrestasiDosen
    fields = '__all__'
    read_only_fields = ['is_validated']
    extra_kwargs = {
      'dosen': {'write_only': True}
    }