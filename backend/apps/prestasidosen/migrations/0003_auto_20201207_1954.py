# Generated by Django 3.0.7 on 2020-12-07 12:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('masters', '0004_auto_20201206_0917'),
        ('prestasidosen', '0002_auto_20201206_1505'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='prestasidosen',
            name='dosen',
        ),
        migrations.AddField(
            model_name='prestasidosen',
            name='NIP',
            field=models.CharField(default=None, max_length=32),
        ),
        migrations.AddField(
            model_name='prestasidosen',
            name='departemen',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='masters.Departemen'),
        ),
        migrations.AddField(
            model_name='prestasidosen',
            name='nama',
            field=models.CharField(default=None, max_length=255),
        ),
    ]
