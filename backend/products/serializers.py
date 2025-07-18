from rest_framework import serializers
from .models import Category, Brand, Goal, Product

# --- Category, Brand and Goal (simple serializers) ---
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = '__all__'


class GoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goal
        fields = '__all__'


# --- For write operations: create or update products using IDs ---
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


# --- For read operations: return nested detailed data ---
class ProductDetailSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    brand = BrandSerializer(read_only=True)
    goals = GoalSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = '__all__'