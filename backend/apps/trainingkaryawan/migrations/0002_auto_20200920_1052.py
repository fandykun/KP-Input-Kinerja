# Generated by Django 3.0.7 on 2020-09-20 10:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trainingkaryawan', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trainingkaryawan',
            name='filepath',
            field=models.FileField(upload_to='trainingkaryawan/'),
        ),
    ]
