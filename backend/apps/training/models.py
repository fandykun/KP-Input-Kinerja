from django.db import models

# Create your models here.
class Training(models.Model):
    peserta = models.TextField()
    judul = models.CharField(max_length=255)
    date_start = models.DateField()
    date_end = models.DateField()
    tempat = models.CharField(max_length=255)
    filepath = models.FileField(upload_to='training/')
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.judul