# Show Single Prestasi Data

Show a single prestasi data if current User has access permissions to it.

**URL** : `/api/prestasi/:pk/`

**URL Parameters** : `pk=[integer]` where `pk` is the ID of the Prestasi data on the
server.

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Data**: `{}`

## Success Response

**Condition** : If Prestasi data exists and Authorized User has required permissions.

**Code** : `200 OK`

**Content example**

```json
{
    "id":2,
    "name": "Fadhil Musaad, Fandykun",
    "lomba": "Compfest",
    "tingkat": "Nasional",
    "jenis": "Mahasiswa",
    "peringkat": "Pertama",
    "tanggal": "2020-08-25",
    "url": "www.prestasi.com",
    "filepath": "/media/prestasi/prestasi_mhs1.png",
    "uploaded_at": "2020-07-25 06:20:38.974508",
    "is_validated": false,
    "departemen": 1
}
```

## Error Responses

**Condition** : If Prestasi data does not exist with `id` of provided `pk` parameter.

**Code** : `404 NOT FOUND`

**Content** 
```json
{
    "detail": "Not found."
}
```

### Or

**Condition** : If Prestasi exists but Authorized User does not have required permissions.

**Code** : `403 FORBIDDEN`

**Content** :

```json
{"detail": "You do not have permission to perform this action."}
```