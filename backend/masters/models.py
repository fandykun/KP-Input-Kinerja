from django.db import models

from authentication.models import User

class Departemen(models.Model):
    nama = models.CharField(max_length=100)

# Create your models here.
class MasterDosen(models.Model):
    user = models.OneToOneField(User, on_delete=models.SET_NULL, null=True, blank=True)
    nama = models.CharField(max_length=255)
    NIP = models.CharField(max_length=20)
    departemen = models.ForeignKey(Departemen, on_delete=models.CASCADE)
    golongan = models.CharField(max_length=20)
    jabatan_fungsional = models.CharField(max_length=100)
    pendidikan_tertinggi = models.CharField(max_length=100)
    ijazah = models.CharField(max_length=100)
    jabatan = models.CharField(max_length=100)
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
    NRP = models.CharField(max_length=14)
    departemen = models.ForeignKey(Departemen, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)