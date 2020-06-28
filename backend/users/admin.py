from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser

# Register your models here.
class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser

    # The fields to be used in displaying the User model.
    # These override the definitions on the base UserAdmin
    # that reference specific fields on auth.User.
    list_display = ('nrp', 'is_staff', 'is_active',)
    list_filter = ('nrp', 'is_staff', 'is_active',)
    fieldsets = (
        (None, {'fields': ('nrp', 'password')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )

    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('nrp', 'password1', 'password2', 'is_staff', 'is_active')}
        ),
    )
    search_fields = ('nrp',)
    ordering = ('nrp',)

admin.site.register(CustomUser, CustomUserAdmin)