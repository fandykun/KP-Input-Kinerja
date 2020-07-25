# Create a Konferensi

Create a konferensi data

**URL** : `/api/konferensi/`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

**Data constraints**

```json
{
    "judul": "[unicode 255 chars max]",
    "author": "[unicode longtext field]",
    "published_at": "[unicode longtext field]",
    "url": "[unicode 255 chars max]",
    "tahun": "[unicode 4 chars max]",
    "tingkat": "[unicode 50 chars max]",
    "pi": "[unicode small integer]",
    "pn": "[unicode small integer]",
    "konf_hal": "[unicode 255 chars max]",
    "tempat": "[unicode 255 chars max]",
    "tanggal_mulai": "[date field (format: YYYY-MM-DD)]",
    "tanggal_selesai": "[date field (format: YYYY-MM-DD)]"
}
```

**Data example** All fields must be sent.

```json
{
    "judul": "The 3rd International Conference on Sustainable Energy Engineering and Application (ICSEEA 2015)",
    "author": "Profesor Alex",
    "published_at": "Konferensi Surabaya",
    "url": "www.konferensi.com",
    "tahun": "2020",
    "tingkat": "Nasional",
    "pi": "4",
    "pn": "4",
    "konf_hal": "100",
    "tempat": "Surabaya",
    "tanggal_mulai": "2020-07-25",
    "tanggal_selesai": "2020-07-30"
}
```

## Success Response

**Condition** : If everything is OK

**Code** : `201 CREATED`

**Content example**

```json
{
    "id":2,
    "judul": "The 3rd International Conference on Sustainable Energy Engineering and Application (ICSEEA 2015)",
    "author": "Profesor Alex",
    "published_at": "Konferensi Surabaya",
    "url": "www.konferensi.com",
    "tahun": "2020",
    "tingkat": "Nasional",
    "pi": "4",
    "pn": "4",
    "konf_hal": "100",
    "tempat": "Surabaya",
    "tanggal_mulai": "2020-07-25",
    "tanggal_selesai": "2020-07-30",
    "uploaded_at": "2020-07-25 06:20:38.974508"
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
    "judul": [
        "This field is required."
    ]
}
```