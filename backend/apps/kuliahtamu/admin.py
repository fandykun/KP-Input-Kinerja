from django.contrib import admin

from .models import KuliahTamu

class CustomKuliahTamuAdmin(admin.ModelAdmin):
    list_display = ('topik', 'pemateri', 'institusi', 'tanggal', 'tingkat', 'url', 'departemen')
    list_filter = ('tanggal', 'tingkat')

# Register your models here.
admin.site.register(KuliahTamu, CustomKuliahTamuAdmin)