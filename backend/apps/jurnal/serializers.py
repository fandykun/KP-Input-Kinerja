from rest_framework import serializers

from .models import Jurnal

class JurnalSerializer(serializers.ModelSerializer):

    class Meta:
        model = Jurnal
        fields = '__all__'