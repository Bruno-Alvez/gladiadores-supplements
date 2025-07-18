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
    list_display = ['name', 'brand', 'success', 'get_categories', 'get_goals']
    list_filter = ['brand', 'success', 'category', 'goals']
    search_fields = ['name', 'description']
    filter_horizontal =[ 'goals' ]
    readonly_fields = ['id']
    fieldsets = (
        (None, {
            'fields': ('id', 'name', 'brand', 'description', 'success')
        }),
        ('Relações', {
            'fields': ('categories', 'goals')
        }),
        ('Imagens e Benefícios', {
            'fields': ('imageUrls', 'benefits', 'whatsappMessage')
        }),
    )

    def get_categories(self, obj):
        return ", ".join([c.name for c in obj.categories.all()])
    get_categories.short_description = 'Categorias'

    def get_goals(self, obj):
        return ", ".join([g.name for g in obj.goals.all()])
    get_goals.short_description = 'Objetivos'
