# Create a Prestasi

Create a prestasi data

**URL** : `/api/prestasi/`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

**Data constraints**

```json
{
    "name": "[unicode 255 chars max]",
    "tingkat": "[unicode 100 chars max]",
    "peringkat": "[unicode 100 chars max]",
    "tanggal": "[date field (format: YYYY-MM-DD)]",
    "url": "[unicode 255 chars max]",
    "filepath":"[file uploaded using multipart/form-data]",
    "is_validated": "[boolean field]"
}
```

**Data example** All fields must be sent.

```json
{
    "name": "Fadhil Musaad, Fandykun",
    "tingkat": "Nasional",
    "peringkat": "Pertama",
    "tanggal": "2020-08-25",
    "url": "www.prestasi.com",
    "filepath": "prestasi_mhs1.png",
    "is_validated": "1"
}
```

## Success Response

**Condition** : If everything is OK

**Code** : `201 CREATED`

**Content example**

```json
{
    "id":2,
    "name": "Fadhil Musaad, Fandykun",
    "lomba": "Compfest",
    "tingkat": "Nasional",
    "peringkat": "Pertama",
    "tanggal": "2020-08-25",
    "url": "www.prestasi.com",
    "filepath": "/media/prestasi/prestasi_mhs1.png",
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
    "name": [
        "This field is required."
    ]
}
```