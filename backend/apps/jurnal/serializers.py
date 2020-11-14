from rest_framework import serializers

from .models import Jurnal

class JurnalSerializer(serializers.ModelSerializer):

    class Meta:
        model = Jurnal
        fields = '__all__'
        read_only_fields = ['is_validated']