from rest_framework import serializers

from .models import User

from ..masters.serializers import (MasterMahasiswaSerializer, 
                                MasterDosenSerializer,
                                MasterTendikSerializer)

class UserSerializer(serializers.ModelSerializer):
    mahasiswa = MasterMahasiswaSerializer()
    dosen = MasterDosenSerializer()
    tendik = MasterTendikSerializer()

    class Meta:
        model = User
        fields = ['username', 'is_admin', 'mahasiswa', 'dosen', 'tendik']