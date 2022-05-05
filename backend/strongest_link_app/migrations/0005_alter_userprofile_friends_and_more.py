# Generated by Django 4.0.4 on 2022-05-05 14:14

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('strongest_link_app', '0004_alter_userprofile_friends_alter_userprofile_gender_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='friends',
            field=models.ManyToManyField(blank=True, to='strongest_link_app.userprofile'),
        ),
        migrations.AlterUniqueTogether(
            name='friendrequest',
            unique_together={('sender', 'receiver')},
        ),
    ]