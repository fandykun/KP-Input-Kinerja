# Generated by Django 3.0.7 on 2020-11-19 11:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('training', '0003_training_is_validated'),
    ]

    operations = [
        migrations.AlterField(
            model_name='training',
            name='filepath',
            field=models.FileField(null=True, upload_to='training/'),
        ),
    ]
