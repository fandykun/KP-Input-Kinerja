from django.contrib import admin

from .models import (Departemen,
                    Fakultas,
                    MasterDosen,
                    MasterMahasiswa,
                    MasterTendik)



# Register your models here.
admin.site.register([
    Fakultas,
    Departemen,
    MasterDosen,
    MasterTendik,
    MasterMahasiswa
])