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
    "pi": "[boolean field (default:false)]",
    "pn": "[boolean field (default:false)]",
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
    "pi": "false",
    "pn": "false",
    "scopus": "false",
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
    "id": 1,
    "judul": "The 3rd International Conference on Sustainable Energy Engineering and Application (ICSEEA 2015)",
    "author": "Profesor Alex",
    "published_at": "Konferensi Surabaya",
    "url": "www.konferensi.com",
    "tahun": "2020",
    "tingkat": "Nasional",
    "pi": false,
    "pn": false,
    "scopus": false,
    "konf_hal": "100",
    "tempat": "Surabaya",
    "tanggal_mulai": "2020-07-25",
    "tanggal_selesai": "2020-07-30",
    "is_validated": false,
    "uploaded_at": "2020-11-13T12:56:05.185367Z"
}
```

## Error Responses

**Condition** : If tanggal_mulai field is in the wrong format

**Code** : `400 BAD REQUEST`

**Content**
```json
{
    "tanggal_mulai": [
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