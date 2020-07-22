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
        fields = '__all__'

class MasterMahasiswaSerializer(serializers.ModelSerializer):

    class Meta:
        model = MasterMahasiswa
        fields = '__all__'

class MasterTendikSerializer(serializers.ModelSerializer):

    class Meta:
        model = MasterTendik
        fields = '__all__'