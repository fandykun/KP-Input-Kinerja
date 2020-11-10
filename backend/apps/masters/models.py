from django.db import models

from apps.authentication.models import User

class Departemen(models.Model):
    nama = models.CharField(max_length=100)

    def __str__(self):
        return self.nama

# Create your models here.
class MasterDosen(models.Model):
    user = models.OneToOneField(User, on_delete=models.SET_NULL, null=True, blank=True)
    nama = models.CharField(max_length=255)
    NIP = models.CharField(max_length=32, unique=True)
    golongan = models.CharField(max_length=20, blank=True)
    jabatan_fungsional = models.CharField(max_length=100)
    pendidikan_tertinggi = models.CharField(max_length=100)
    ijazah = models.CharField(max_length=100, blank=True)
    departemen = models.ForeignKey(Departemen, on_delete=models.CASCADE)
    jabatan = models.CharField(max_length=100, null=True, blank=True)
    status_kepegawaian = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class MasterTendik(models.Model):
    user = models.OneToOneField(User, on_delete=models.SET_NULL, null=True, blank=True)
    nama = models.CharField(max_length=255)
    departemen = models.ForeignKey(Departemen, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
class MasterMahasiswa(models.Model):
    user = models.OneToOneField(User, on_delete=models.SET_NULL, null=True, blank=True)
    nama = models.CharField(max_length=255)
    NRP = models.CharField(max_length=14, unique=True)
    departemen = models.ForeignKey(Departemen, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)