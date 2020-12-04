# Show Single Sertifikasi Data

Show a single sertifikasi data if current User has access permissions to it.

**URL** : `/api/sertifikasi/:pk/`

**URL Parameters** : `pk=[integer]` where `pk` is the ID of the Sertifikasi data on the
server.

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Data**: `{}`

## Success Response

**Condition** : If Sertifikasi data exists and Authorized User has required permissions.

**Code** : `200 OK`

**Content example**

```json
{
    "id":2,
    "nama_sertifikasi": "aws certified",
    "lembaga_sertifikasi": "aws amazon verification",
    "nama": "Fadhil Musaad",
    "tanggal": "2020-08-25",
    "tanggal_berakhir": "2021-08-25",
    "nomor": "4KMYW0E",
    "departemen": 1,
    "filepath": "/media/sertifikasi/sertifikasi_fadhil.png",
    "uploaded_at": "2020-07-25 06:20:38.974508",
    "is_validated": false
}
```

## Error Responses

**Condition** : If Sertifikasi data does not exist with `id` of provided `pk` parameter.

**Code** : `404 NOT FOUND`

**Content** 
```json
{
    "detail": "Not found."
}
```

### Or

**Condition** : If Sertifikasi exists but Authorized User does not have required permissions.

**Code** : `403 FORBIDDEN`

**Content** :

```json
{"detail": "You do not have permission to perform this action."}
```