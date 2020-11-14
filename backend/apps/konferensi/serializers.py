from rest_framework import serializers

from .models import Konferensi

class KonferensiSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Konferensi
        fields = '__all__'
        read_only_fields = ['is_validated']