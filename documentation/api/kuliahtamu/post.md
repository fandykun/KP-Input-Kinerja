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
    "departemen": "[departemen_id]",
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
    "departemen": 1,
    "filepath": "Capture2.png"
}
```

## Success Response

**Condition** : If everything is OK

**Code** : `201 CREATED`

**Content example**

```json
{
    "id": 1,
    "topik": "Machine Learning for Dummies",
    "pemateri": "Prof. Budi",
    "institusi": "Universitas Indonesia",
    "tingkat": "Nasional",
    "tanggal": "2020-07-21",
    "filepath": "/media/kuliahtamu/Capture2.PNG",
    "is_validated": false,
    "uploaded_at": "2020-11-13T14:38:54.222053Z",
    "departemen": 1
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