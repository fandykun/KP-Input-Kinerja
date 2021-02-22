# Generated by Django 3.0.7 on 2020-12-06 07:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('masters', '0004_auto_20201206_0917'),
    ]

    operations = [
        migrations.CreateModel(
            name='PrestasiDosen',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('kategori_peserta', models.CharField(max_length=100)),
                ('kategori_prestasi', models.CharField(max_length=100)),
                ('nama_penghargaan', models.CharField(max_length=255)),
                ('jenis_penghargaan', models.CharField(max_length=255)),
                ('lembaga_penyelenggara', models.CharField(max_length=255)),
                ('capaian', models.CharField(max_length=100)),
                ('web_berita', models.CharField(max_length=255)),
                ('tanggal', models.DateField()),
                ('filepath', models.FileField(null=True, upload_to='prestasi/dosen/')),
                ('is_validated', models.BooleanField(default=False)),
                ('uploaded_at', models.DateTimeField(auto_now=True)),
                ('dosen', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='masters.MasterDosen')),
            ],
        ),
    ]