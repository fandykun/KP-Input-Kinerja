# Show All Training

Show all Training Data

**URL** : `/api/training/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Data constraints** : `{}`

## Success Responses

**Condition** : User can not see any training data.

**Code** : `200 OK`

**Content** : `{[]}`

### OR

**Condition** : User can see one or more training data.

**Code** : `200 OK`

**Content** : In this example, the User can see one training data

```json
[
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
]
```