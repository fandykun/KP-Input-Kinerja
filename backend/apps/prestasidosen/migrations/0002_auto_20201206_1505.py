# Generated by Django 3.0.7 on 2020-12-06 08:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('prestasidosen', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='prestasidosen',
            name='filepath',
            field=models.FileField(blank=True, null=True, upload_to='prestasi/dosen/'),
        ),
    ]
