# Generated by Django 4.0.2 on 2022-05-11 11:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_product_tags'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='description',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
    ]
