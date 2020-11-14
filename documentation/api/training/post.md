# Create a Training

Create a training data

**URL** : `/api training/`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

**Data constraints**

```json
{
    "peserta":"[unicode longtext field]",
    "jenis":"[unicode 50 chars max]",
    "judul": "[unicode 255 chars max]",
    "tempat": "[unicode 255 chars max]",
    "date_start": "[date field (format: YYYY-MM-DD)]",
    "date_end": "[date field (format: YYYY-MM-DD)]",
    "filepath":"[file uploaded using multipart/form-data]"
}
```

**Data example** All fields must be sent.

```json
{
    "peserta":"Bapak dosen",
    "jenis":"Dosen",
    "judul": "Pelatihan Mengajar",
    "tempat": "Surabaya",
    "date_start": "2020-08-25",
    "date_end": "2020-08-26",
    "filepath": "/media/training/training1.png"
}
```

## Success Response

**Condition** : If everything is OK

**Code** : `201 CREATED`

**Content example**

```json
{
    "id":2,
    "peserta":"Bapak dosen",
    "jenis":"Dosen",
    "judul": "Pelatihan Mengajar",
    "tempat": "Surabaya",
    "date_start": "2020-08-25",
    "date_end": "2020-08-26",
    "filepath": "/media/training/training1.png",
    "uploaded_at": "2020-07-25 06:20:38.974508"
}
```

## Error Responses

**Condition** : If date_start field is in the wrong format

**Code** : `400 BAD REQUEST`

**Content**
```json
{
    "date_start": [
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