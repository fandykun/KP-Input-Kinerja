from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.utils.translation import gettext_lazy as _
from django.utils import timezone

from .managers import UserManager
from apps.masters.models import (MasterMahasiswa,
                                MasterDosen,
                                MasterTendik)

class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=150, unique=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    
    mahasiswa = models.OneToOneField(MasterMahasiswa, on_delete=models.CASCADE, null=True, blank=True)
    dosen = models.OneToOneField(MasterDosen, on_delete=models.CASCADE, null=True, blank=True)
    tendik = models.OneToOneField(MasterTendik, on_delete=models.CASCADE, null=True, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)

    objects = UserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.username

    @property
    def is_staff(self):
        return self.is_superuser

    def get_departemen(self):
        if self.mahasiswa:
            return self.mahasiswa.departemen.nama
        elif self.dosen:
            return self.dosen.departemen.nama
        elif self.tendik:
            return self.tendik.departemen.nama
        else:
            return None
    
    def get_nama(self):
        if self.mahasiswa:
            return self.mahasiswa.nama
        elif self.dosen:
            return self.dosen.nama
        elif self.tendik:
            return self.tendik.nama
        else:
            return None