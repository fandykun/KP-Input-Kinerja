from django.contrib import admin

from .models import PrestasiDosen

class CustomPrestasiDosenAdmin(admin.ModelAdmin):
    list_display = ('NIP', 'nama', 'departemen', 'nama_penghargaan', 'capaian', 'tanggal', 'web_berita')
    list_filter = ('tanggal', 'capaian')

# Register your models here.
admin.site.register(PrestasiDosen, CustomPrestasiDosenAdmin)