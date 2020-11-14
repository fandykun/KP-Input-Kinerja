# Generated by Django 3.0.7 on 2020-11-12 20:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('masters', '0002_auto_20200721_0309'),
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='dosen',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='masters.MasterDosen'),
        ),
        migrations.AlterField(
            model_name='user',
            name='mahasiswa',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='masters.MasterMahasiswa'),
        ),
        migrations.AlterField(
            model_name='user',
            name='tendik',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='masters.MasterTendik'),
        ),
    ]