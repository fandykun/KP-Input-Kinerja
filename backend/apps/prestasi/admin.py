from django.contrib import admin

from .models import Prestasi

class CustomPrestasiAdmin(admin.ModelAdmin):
    list_display = ('name', 'lomba', 'peringkat', 'tanggal', 'tingkat', 'url', 'departemen')
    list_filter = ('tanggal', 'tingkat')

# Register your models here.
admin.site.register(Prestasi, CustomPrestasiAdmin)