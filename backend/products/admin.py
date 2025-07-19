from django.contrib import admin
from .models import Category, Brand, Goal, Product


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    search_fields = ['name']
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    search_fields = ['name']
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Goal)
class GoalAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    search_fields = ['name']
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'brand', 'success', 'category', 'get_goals']
    list_filter = ['brand', 'success', 'category', 'goals']
    search_fields = ['name', 'description']
    filter_horizontal = ['goals']
    readonly_fields = ['slug']
    prepopulated_fields = {'slug': ('name',)}

    fieldsets = (
        (None, {
            'fields': ('name', 'slug', 'description', 'category', 'brand', 'goals', 'success', 'benefits', 'whatsapp_message')
        }),
        ('Imagens', {
            'fields': (
                'image_main', 'image_1', 'image_2', 'image_3', 'image_4', 'image_5',
                'image_6', 'image_7', 'image_8', 'image_9'
            )
        }),
    )

    def get_goals(self, obj):
        return ", ".join([g.name for g in obj.goals.all()])
    get_goals.short_description = 'Objetivos'