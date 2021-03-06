from django.db import models
from ..masters.models import Departemen

# Create your models here.
class Prestasi(models.Model):
    name = models.CharField(max_length=255)
    lomba = models.CharField(max_length=255)
    tingkat = models.CharField(max_length=100)
    peringkat = models.CharField(max_length=255)
    tanggal = models.DateField()
    departemen = models.ForeignKey(to=Departemen, on_delete=models.DO_NOTHING,null=True)
    url = models.CharField(max_length=255)
    filepath = models.FileField(upload_to='prestasi/',null=True)
    uploaded_at = models.DateTimeField(auto_now=True)
    is_validated = models.BooleanField(default=False)
    jenis = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name