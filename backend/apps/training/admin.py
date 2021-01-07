from django.contrib import admin

from .models import Training

class CustomTrainingAdmin(admin.ModelAdmin):
    list_display = ('peserta', 'jenis', 'judul', 'date_start', 'tempat', 'departemen')
    list_filter = ('date_start', 'departemen')

# Register your models here.
admin.site.register(Training, CustomTrainingAdmin)