from django.contrib.auth.base_user import BaseUserManager

# Referensi:
# https://docs.djangoproject.com/en/3.0/topics/auth/customizing/#django.contrib.auth.models.BaseUserManager

class CustomUserManager(BaseUserManager):
    def create_user(self, nrp, password=None, **extra_fields):
        """
        Creates and saves a User with NRP and password
        """
        if not nrp:
            raise ValueError('NRP harus diisi')
        
        user = self.model(nrp = nrp, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, nrp, password=None, **extra_fields):
        """
        Creates and saves a superuser with NRP and password
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        return self.create_user(nrp, password, **extra_fields)