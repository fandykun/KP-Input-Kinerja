from rest_framework import serializers

from .models import TrainingDosen

class TrainingDosenSerializer(serializers.ModelSerializer):

    class Meta:
        model = TrainingDosen
        fields = '__all__'