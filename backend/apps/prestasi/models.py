from django.db import models

# Create your models here.
class Prestasi(models.Model):
    name = models.CharField(max_length=255)
    lomba = models.CharField(max_length=255)
    tingkat = models.CharField(max_length=100)
    peringkat = models.CharField(max_length=255)
    tanggal = models.DateField()
    url = models.CharField(max_length=255)
    filepath = models.FileField(upload_to='prestasi/')
    uploaded_at = models.DateTimeField(auto_now=True)
    is_validated = models.BooleanField(default=False)
    
    def __str__(self):
        return self.name