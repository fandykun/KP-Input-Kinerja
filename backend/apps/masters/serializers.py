from rest_framework import serializers

from .models import (Departemen,
                    MasterDosen,
                    MasterMahasiswa,
                    MasterTendik)

class DepartemenSerializer(serializers.ModelSerializer):

    class Meta:
        model = Departemen
        fields = '__all__'

class MasterDosenSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = MasterDosen
        exclude = ['created_at', 'updated_at']

class MasterMahasiswaSerializer(serializers.ModelSerializer):
    

    class Meta:
        model = MasterMahasiswa
        exclude = ['created_at', 'updated_at']

class MasterTendikSerializer(serializers.ModelSerializer):

    class Meta:
        model = MasterTendik
        exclude = ['created_at', 'updated_at']