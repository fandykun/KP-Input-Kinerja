# Generated by Django 3.0.7 on 2020-11-19 11:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('prestasi', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='prestasi',
            name='filepath',
            field=models.FileField(null=True, upload_to='prestasi/'),
        ),
    ]