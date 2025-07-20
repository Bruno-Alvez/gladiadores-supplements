from rest_framework import viewsets, filters
from .models import Category, Brand, Goal, Product
from .serializers import (
    CategorySerializer,
    BrandSerializer,
    GoalSerializer,
    ProductSerializer,
    ProductDetailSerializer
)


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class BrandViewSet(viewsets.ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer


class GoalViewSet(viewsets.ModelViewSet):
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.select_related('category', 'brand').prefetch_related('goals')
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']
    pagination_class = None

    def get_serializer_class(self):
        if self.action in ['list', 'retrieve']:
            return ProductDetailSerializer
        return ProductSerializer