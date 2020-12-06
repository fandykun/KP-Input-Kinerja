# Generated by Django 3.0.7 on 2020-07-21 03:09

from django.db import migrations

def departemen_seed(apps, schema_editor):
    Departemen = apps.get_model('masters', 'Departemen')
    nama_departemens = [
        'Teknik Elektro',
        'Teknik Biomedik',
        'Teknik Komputer',
        'Teknik Informatika',
        'Sistem Informasi',
        'Teknologi Informasi'
    ]
    for nama in nama_departemens:
        d = Departemen(nama=nama)
        d.save()
 
class Migration(migrations.Migration):

    dependencies = [
        ('masters', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(departemen_seed)
    ]
