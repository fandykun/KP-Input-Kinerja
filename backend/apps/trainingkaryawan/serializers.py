from rest_framework import serializers

from .models import TrainingKaryawan

class TrainingKaryawanSerializer(serializers.ModelSerializer):

    class Meta:
        model = TrainingKaryawan
        fields = '__all__'