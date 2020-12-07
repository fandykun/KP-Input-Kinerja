from rest_framework import serializers

from .models import PrestasiDosen

class PrestasiDosenSerializer(serializers.ModelSerializer):

  class Meta:
    model = PrestasiDosen
    fields = '__all__'
    read_only_fields = ['is_validated']