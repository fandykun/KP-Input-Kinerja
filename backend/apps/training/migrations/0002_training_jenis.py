# Generated by Django 3.0.7 on 2020-11-14 15:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('training', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='training',
            name='jenis',
            field=models.CharField(default=1, max_length=50),
            preserve_default=False,
        ),
    ]
