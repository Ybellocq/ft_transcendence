# Generated by Django 4.2.3 on 2024-04-16 14:51

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('singlepage', '0003_user_is_online'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='players_uid',
            field=models.ManyToManyField(related_name='players', to=settings.AUTH_USER_MODEL),
        ),
    ]
