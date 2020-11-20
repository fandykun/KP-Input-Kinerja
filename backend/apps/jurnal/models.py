from django.db import models
from ..masters.models import Departemen

# Create your models here.
class Jurnal(models.Model):
    judul = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    published_at = models.TextField()
    jurnal_vol = models.CharField(max_length=100)
    jurnal_no = models.CharField(max_length=100)
    url = models.CharField(max_length=255)
    tahun = models.CharField(max_length=4)
    tingkat = models.CharField(max_length=50)
    pi = models.BooleanField(default=False)
    pn = models.BooleanField(default=False)
    scopus = models.BooleanField(default=False)
    is_validated = models.BooleanField(default=False)
    uploaded_at = models.DateTimeField(auto_now=True)
    departemen = models.ForeignKey(to=Departemen, on_delete=models.DO_NOTHING, null=True)

    def __str__(self):
        return self.judul