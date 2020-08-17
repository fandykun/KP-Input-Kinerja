# Create a TrainingKaryawan

Create a trainingkaryawan data

**URL** : `/api trainingkaryawan/`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

**Data constraints**

```json
{
    "jenis_pelatihan": "[unicode 255 chars max]",
    "tempat": "[unicode 255 chars max]",
    "tanggal": "[date field (format: YYYY-MM-DD)]",
    "filepath":"[file uploaded using multipart/form-data]"
}
```

**Data example** All fields must be sent.

```json
{
    "jenis_pelatihan": "Pelatihan Manajemen",
    "tanggal": "2020-08-25",
    "tempat": "Surabaya",
    "filepath": "/media/trainingkaryawan/trainingkaryawan1.png"
}
```

## Success Response

**Condition** : If everything is OK

**Code** : `201 CREATED`

**Content example**

```json
{
    "id":2,
    "jenis_pelatihan": "Pelatihan Manajemen",
    "tanggal": "2020-08-25",
    "tempat": "Surabaya",
    "filepath": "/media/trainingkaryawan/trainingkaryawan1.png",
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