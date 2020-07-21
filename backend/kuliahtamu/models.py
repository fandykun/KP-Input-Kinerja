from django.db import models

# Create your models here.
class KuliahTamu(models.Model):
    topik = models.CharField(max_length=255)
    pemateri = models.TextField()
    institusi = models.CharField(max_length=255)
    tingkat = models.CharField(max_length=100)
    tanggal = models.DateField()
    filepath = models.FileField(upload_to='kuliahtamu/')
    uploaded_at = models.DateTimeField(auto_now=True)
    
    def __str(self):
        return self.topik