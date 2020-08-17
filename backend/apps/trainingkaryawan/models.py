from django.db import models

# Create your models here.
class TrainingKaryawan(models.Model):
    jenis_pelatihan = models.CharField(max_length=255)
    tanggal = models.DateField()
    tempat = models.CharField(max_length=255)
    filepath = models.FileField(upload_to='trainingkaryawan/')
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str(self):
        return self.jenis_pelatihan