from django.contrib import admin

from .models import Jurnal

class CustomJurnalAdmin(admin.ModelAdmin):
    list_display = ('judul', 'author', 'published_at', 'tahun', 'tingkat', 'url')
    list_filter = ('tahun', 'tingkat')

# Register your models here.
admin.site.register(Jurnal, CustomJurnalAdmin)