# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-11-22 10:28
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DieResult',
            fields=[
                ('k', models.BigIntegerField(editable=False, primary_key=True, serialize=False, verbose_name='k')),
                ('result', models.FloatField(verbose_name='result')),
            ],
        ),
    ]