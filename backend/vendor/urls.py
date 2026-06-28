from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import VendorViewSet

router = DefaultRouter()
router.register(r'', VendorViewSet, basename='vendor')

urlpatterns = [
    path('', include(router.urls)),
    path('profile/', VendorViewSet.as_view({'get': 'profile'}), name='vendor-profile'),
    path('profile/update/', VendorViewSet.as_view({'put': 'profile_update', 'patch': 'profile_update'}), name='vendor-profile-update'),
    path('stats/', VendorViewSet.as_view({'get': 'stats'}), name='vendor-stats'),
    path('products/', VendorViewSet.as_view({'get': 'products', 'post': 'create_product'}), name='vendor-products'),
]
