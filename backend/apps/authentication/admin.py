from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserChangeForm, CustomUserCreationForm
from .models import User

# Register your models here.
class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = User
    list_display = ('username', 'is_active', 'is_mahasiswa', 'is_dosen', 'is_tendik', )
    list_filter = ('username', 'is_active', 'is_mahasiswa', 'is_dosen', 'is_tendik', )
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Permissions', {'fields': ('is_active', 'is_mahasiswa', 'is_dosen', 'is_tendik')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide', ),
            'fields': ('username', 'password1', 'password2', 'is_active', 'is_mahasiswa', 'is_dosen', 'is_tendik')
        }),
    )
    search_fields = ('username', 'is_mahasiswa', 'is_dosen', 'is_tendik',)
    ordering = ('date_joined',)

admin.site.register(User, CustomUserAdmin)