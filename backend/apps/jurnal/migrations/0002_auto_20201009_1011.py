# Generated by Django 3.0.7 on 2020-10-09 10:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jurnal', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='jurnal',
            name='jurnalnasional',
        ),
        migrations.AlterField(
            model_name='jurnal',
            name='pi',
            field=models.BooleanField(),
        ),
        migrations.AlterField(
            model_name='jurnal',
            name='pn',
            field=models.BooleanField(),
        ),
    ]