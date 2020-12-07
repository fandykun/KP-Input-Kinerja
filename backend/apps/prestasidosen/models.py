from django.db import models
from ..masters.models import Departemen
from ..masters.models import MasterDosen

# Create your models here.
class PrestasiDosen(models.Model):
  NIP = models.CharField(max_length=32, default=None)
  nama = models.CharField(max_length=255, default=None)
  departemen = models.ForeignKey(Departemen, on_delete=models.CASCADE, null=True)
  kategori_peserta = models.CharField(max_length=100)
  kategori_prestasi = models.CharField(max_length=100)
  nama_penghargaan = models.CharField(max_length=255)
  jenis_penghargaan = models.CharField(max_length=255)
  lembaga_penyelenggara = models.CharField(max_length=255)
  capaian = models.CharField(max_length=100)
  web_berita = models.CharField(max_length=255)
  tanggal = models.DateField()
  filepath = models.FileField(upload_to='prestasi/dosen/', null=True, blank=True)
  is_validated = models.BooleanField(default=False)
  uploaded_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.nama_penghargaan