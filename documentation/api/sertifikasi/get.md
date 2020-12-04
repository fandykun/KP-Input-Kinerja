# Show All Sertifikasi

Show all Sertifikasi Data

**URL** : `/api/sertifikasi/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Data constraints** : `{}`

## Success Responses

**Condition** : User can not see any sertifikasi data.

**Code** : `200 OK`

**Content** : `{[]}`

### OR

**Condition** : User can see one or more sertifikasi data.

**Code** : `200 OK`

**Content** : In this example, the User can see one sertifikasi data

```json
[
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
]
```