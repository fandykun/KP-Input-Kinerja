from django.db import models

# Create your models here.
class Konferensi(models.Model):
    judul = models.CharField(max_length=255)
    author = models.TextField()
    published_at = models.TextField()
    url = models.CharField(max_length=255)
    tahun = models.CharField(max_length=4)
    tingkat = models.CharField(max_length=50)
    pi = models.SmallIntegerField()
    pn = models.SmallIntegerField()
    konf_hal = models.CharField(max_length=255)
    tempat = models.CharField(max_length=255)
    tanggal_mulai = models.DateField()
    tanggal_selesai = models.DateField()
    uploaded_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.judul