from django.db import models
from cloudinary.models import CloudinaryField
from .category import Category
from .brand import Brand
from .goal import Goal


class Product(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    benefits = models.JSONField(blank=True, null=True)
    whatsapp_message = models.TextField()
    success = models.BooleanField(default=False)

    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    brand = models.ForeignKey(Brand, on_delete=models.SET_NULL, null=True, blank=True, related_name='products')
    goals = models.ManyToManyField(Goal, related_name='products')

    image_main = CloudinaryField('image', folder='products', blank=True, null=True)
    image_1 = CloudinaryField('image', folder='products', blank=True, null=True)
    image_2 = CloudinaryField('image', folder='products', blank=True, null=True)
    image_3 = CloudinaryField('image', folder='products', blank=True, null=True)
    image_4 = CloudinaryField('image', folder='products', blank=True, null=True)
    image_5 = CloudinaryField('image', folder='products', blank=True, null=True)
    image_6 = CloudinaryField('image', folder='products', blank=True, null=True)
    image_7 = CloudinaryField('image', folder='products', blank=True, null=True)
    image_8 = CloudinaryField('image', folder='products', blank=True, null=True)
    image_9 = CloudinaryField('image', folder='products', blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'
        ordering = ['name']

    def __str__(self):
        return self.name

    def get_all_images(self):
        urls = []
        if self.image_main:
            urls.append(self.image_main.url)
        for i in range(1, 10):
            img = getattr(self, f'image_{i}', None)
            if img:
                urls.append(img.url)
        return urls