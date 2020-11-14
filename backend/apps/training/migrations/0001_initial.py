# Generated by Django 3.0.7 on 2020-07-21 03:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Training',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('peserta', models.TextField()),
                ('jenis', models.CharField(max_length=50)),
                ('judul', models.CharField(max_length=255)),
                ('tempat', models.CharField(max_length=255)),
                ('filepath', models.FileField(upload_to='training/')),
                ('date_start', models.DateField()),
                ('date_end', models.DateField()),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
