from django.contrib import admin

from .models import Konferensi

class CustomKonferensiAdmin(admin.ModelAdmin):
    list_display = ('judul', 'author', 'published_at', 'tahun', 'tingkat', 'url', 'tempat', 'konf_hal', 'scopus', 'pi', 'pn', 'departemen')
    list_filter = ('tahun', 'tingkat')

# Register your models here.
admin.site.register(Konferensi, CustomKonferensiAdmin)