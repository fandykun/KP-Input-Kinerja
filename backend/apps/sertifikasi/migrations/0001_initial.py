# Generated by Django 3.0.7 on 2020-11-12 15:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Sertifikasi',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nama_sertifikasi', models.CharField(max_length=255)),
                ('lembaga_sertifikasi', models.CharField(max_length=255)),
                ('nama', models.CharField(max_length=255)),
                ('tanggal', models.DateField()),
                ('nomor', models.CharField(max_length=255)),
                ('filepath', models.FileField(upload_to='prestasi/')),
                ('uploaded_at', models.DateTimeField(auto_now=True)),
                ('is_validated', models.BooleanField(default=0)),
            ],
        ),
    ]