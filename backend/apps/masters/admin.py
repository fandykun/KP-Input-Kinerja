from django.contrib import admin

from .models import (Departemen,
                    MasterDosen,
                    MasterMahasiswa,
                    MasterTendik)



# Register your models here.
admin.site.register([
    Departemen,
    MasterDosen,
    MasterTendik,
    MasterMahasiswa
])