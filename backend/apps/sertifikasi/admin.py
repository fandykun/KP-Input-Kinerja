from django.contrib import admin

from .models import Sertifikasi

class CustomSertifikasiAdmin(admin.ModelAdmin):
    list_display = ('nama_sertifikasi', 'lembaga_sertifikasi', 'nama', 'tanggal', 'nomor', 'departemen')
    list_filter = ('tanggal', 'departemen')

# Register your models here.
admin.site.register(Sertifikasi, CustomSertifikasiAdmin)