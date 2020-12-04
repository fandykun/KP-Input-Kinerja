from django.db import models
from ..masters.models import Departemen

# Create your models here.
class Sertifikasi(models.Model):
    nama_sertifikasi = models.CharField(max_length=255)
    lembaga_sertifikasi = models.CharField(max_length=255)
    nama = models.CharField(max_length=255)
    tanggal = models.DateField()
    nomor = models.CharField(max_length=255)
    departemen = models.ForeignKey(to=Departemen, on_delete=models.DO_NOTHING,null=True)
    filepath = models.FileField(upload_to='sertifikasi/',null=True)
    uploaded_at = models.DateTimeField(auto_now=True)
    is_validated = models.BooleanField(default=False)
    
    def __str__(self):
        return self.nama_sertifikasi