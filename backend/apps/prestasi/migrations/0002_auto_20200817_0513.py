# Generated by Django 3.0.7 on 2020-08-17 05:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('prestasi', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='prestasi',
            name='peringkat',
            field=models.CharField(max_length=255),
        ),
    ]
