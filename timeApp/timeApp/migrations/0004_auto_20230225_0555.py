# Generated by Django 3.1.7 on 2023-02-25 10:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('timeApp', '0003_auto_20230225_0545'),
    ]

    operations = [
        migrations.AlterField(
            model_name='place',
            name='slug',
            field=models.SlugField(blank=True, default='', unique=True),
        ),
    ]
