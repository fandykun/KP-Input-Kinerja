# Create a Kuliah Tamu

Create a kuliah tamu data

**URL** : `/api/kuliah-tamu/`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

**Data constraints**

```json
{
    "topik": "[unicode 255 chars max]",
    "pemateri": "[unicode longtext field]",
    "institusi": "[unicode 255 chars max]",
    "tingkat": "[unicode 100 chars max]",
    "tanggal": "[date field (format: YYYY-MM-DD)]",
    "filepath": "[file uploaded using multipart/form-data]"
}
```

**Data example** All fields must be sent.

```json
{
    "topik": "Machine Learning for Dummies",
    "pemateri": "Prof. Budi",
    "institusi": "Universitas Indonesia",
    "tingkat": "Nasional",
    "tanggal": "2020-07-21",
    "filepath": "dokumentasi-kultam.png"
}
```

## Success Response

**Condition** : If everything is OK

**Code** : `201 CREATED`

**Content example**

```json
{
    "id": 2,
    "topik": "Machine Learning for Dummies",
    "pemateri": "Prof. Budi",
    "institusi": "Universitas Indonesia",
    "tingkat": "Nasional",
    "tanggal": "2020-07-21",
    "filepath": "/media/kuliahtamu/dokumentasi-kultam.png",
    "uploaded_at": "2020-07-21T05:16:40.733429Z"
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

**Condition** : If fields are missed and no file uploaded.

**Code** : `400 BAD REQUEST`

**Content example**
```json
{
    "topik": [
        "This field is required."
    ],
    "filepath": [
        "No file was submitted."
    ]
}
```