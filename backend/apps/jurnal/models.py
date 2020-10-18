from django.db import models

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
    pi = models.BooleanField()
    pn = models.BooleanField()
    scopus = models.BooleanField()
    uploaded_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.judul