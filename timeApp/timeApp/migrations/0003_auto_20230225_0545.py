# Generated by Django 3.1.7 on 2023-02-25 10:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('timeApp', '0002_auto_20230225_0536'),
    ]

    operations = [
        migrations.AlterField(
            model_name='place',
            name='slug',
            field=models.SlugField(blank=True, unique=True),
        ),
    ]