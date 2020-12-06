from django.db import models
from ..masters.models import Departemen
from ..masters.models import MasterDosen

# Create your models here.
class PrestasiDosen(models.Model):
  dosen = models.ForeignKey(to=MasterDosen, on_delete=models.DO_NOTHING)
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

  def get_NIP(self):
    return self.dosen.NIP
  
  def get_nama(self):
    return self.dosen.nama
  
  def get_departemen(self):
    if self.dosen.departemen:
      return self.dosen.departemen.nama
    
    return None