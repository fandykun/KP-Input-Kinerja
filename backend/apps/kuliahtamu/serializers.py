from rest_framework import serializers

from .models import KuliahTamu

class KuliahTamuSerializer(serializers.ModelSerializer):

    class Meta:
        model = KuliahTamu
        fields = '__all__'