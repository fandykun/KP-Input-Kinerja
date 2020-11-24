# Get An Exporting Data to Excel

Get An Exporting Data to Excel

**URL** : `/api/{nama-modul}/export/`

**URL Example** : `/api/prestasi/export/`

**Parameter**: Tahun and Departemen

**Example URL with Parameter**: `/api/kuliah-tamu/export?tahun=2020&departemen=0`

**Note** Fill Departemen value with id (not name)

**Method** : `GET`

**Auth required** : YES

## Success Responses

**Condition** : User has logged in

**Code** : `200 OK`

**Content** : Excel File