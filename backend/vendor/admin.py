from django.contrib import admin
from .models import Vendor

@admin.register(Vendor)
class VendorAdmin(admin.ModelAdmin):
    list_display = ['business_name', 'user', 'verification_status', 'follower_count', 'created_at']
    list_filter = ['verification_status', 'created_at', 'subscription_plan']
    search_fields = ['business_name', 'user__username', 'store_slug']
    readonly_fields = ['created_at', 'updated_at']
    
    fieldsets = (
        ('User', {
            'fields': ('user',)
        }),
        ('Business Information', {
            'fields': ('business_name', 'store_slug', 'bio', 'location', 'instagram_handle')
        }),
        ('Store', {
            'fields': ('logo_url',)
        }),
        ('Metrics', {
            'fields': ('follower_count',)
        }),
        ('Verification & Plan', {
            'fields': ('verification_status', 'subscription_plan')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
