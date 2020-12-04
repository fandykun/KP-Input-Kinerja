# Create a Sertifikasi

Create a sertifikasi data

**URL** : `/api/sertifikasi/`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

**Data constraints**

```json
{
    "nama_sertifikasi": "[unicode 255 chars max]",
    "lembaga_sertifikasi": "[unicode 255 chars max]",
    "nama": "[unicode 255 chars max]",
    "tanggal": "[date field (format: YYYY-MM-DD)]",
    "tanggal_berakhir": "[date field (format: YYYY-MM-DD)]",
    "nomor": "[unicode 255 chars max]",
    "departemen": "[departemen_id]",
    "filepath":"[file uploaded using multipart/form-data]",
    "is_validated": "[boolean field]"
}
```

**Data example** All fields must be sent.

```json
{
    "nama_sertifikasi": "aws certified",
    "lembaga_sertifikasi": "aws amazon verification",
    "nama": "Fadhil Musaad",
    "tanggal": "2020-08-25",
    "tanggal_berakhir": "2021-08-25",
    "nomor": "4KMYW0E",
    "departemen": 1,
    "filepath": "/media/sertifikasi/sertifikasi_fadhil.png",
    "is_validated": "0"
}
```

## Success Response

**Condition** : If everything is OK

**Code** : `201 CREATED`

**Content example**

```json
{
    "id":2,
    "nama_sertifikasi": "aws certified",
    "lembaga_sertifikasi": "aws amazon verification",
    "nama": "Fadhil Musaad",
    "tanggal": "2020-08-25",
    "nomor": "4KMYW0E",
    "departemen": 1,
    "filepath": "/media/sertifikasi/sertifikasi_fadhil.png",
    "uploaded_at": "2020-07-25 06:20:38.974508",
    "is_validated": "0"
}
```

## Error Responses

**Condition** : If tanggal field is in the wrong format

**Code** : `400 BAD REQUEST`

**Content**
```json
{
    "tanggal": [
        "Date has wrong format. Use one of these formats instead: YYYY-MM-DD."
    ]
}
```

### Or

**Condition** : If fields are missed.

**Code** : `400 BAD REQUEST`

**Content example**
```json
{
    "nama": [
        "This field is required."
    ]
}
```