# Generated by Django 3.0.7 on 2020-12-04 08:28

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sertifikasi', '0002_auto_20201204_0658'),
    ]

    operations = [
        migrations.AddField(
            model_name='sertifikasi',
            name='tanggal_berakhir',
            field=models.DateField(default=datetime.datetime.now),
        ),
    ]
