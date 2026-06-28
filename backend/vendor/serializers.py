from rest_framework import serializers
from .models import Vendor

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = [
            'id',
            'business_name',
            'store_slug',
            'instagram_handle',
            'location',
            'follower_count',
            'verification_status',
            'logo_url',
            'subscription_plan',
            'created_at',
            'updated_at',
        ]
        read_only_fields = ['id', 'created_at', 'updated_at', 'verification_status']


class VendorDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = [
            'id',
            'business_name',
            'store_slug',
            'instagram_handle',
            'location',
            'bio',
            'follower_count',
            'verification_status',
            'logo_url',
            'subscription_plan',
            'created_at',
            'updated_at',
        ]
        read_only_fields = ['id', 'created_at', 'updated_at', 'verification_status', 'store_slug']


class ProductSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    title = serializers.CharField()
    description = serializers.CharField()
    price = serializers.DecimalField(max_digits=10, decimal_places=2)
    image = serializers.URLField(required=False)
    is_active = serializers.BooleanField()
    views_count = serializers.IntegerField()
    category = serializers.CharField()
    stock = serializers.IntegerField()
