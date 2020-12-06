from django.db import models
from ..masters.models import Departemen

# Create your models here.
class KuliahTamu(models.Model):
    topik = models.CharField(max_length=255)
    pemateri = models.TextField()
    institusi = models.CharField(max_length=255)
    tingkat = models.CharField(max_length=100)
    tanggal = models.DateField()
    filepath = models.FileField(upload_to='kuliahtamu/',null=True)
    departemen = models.ForeignKey(to=Departemen, on_delete=models.DO_NOTHING)
    url = models.CharField(max_length=255, null=True)
    is_validated = models.BooleanField(default=False)
    uploaded_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.topik