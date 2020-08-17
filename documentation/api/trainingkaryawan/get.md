# Show All TrainingKaryawan

Show all TrainingKaryawan Data

**URL** : `/api/trainingkaryawan/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Data constraints** : `{}`

## Success Responses

**Condition** : User can not see any trainingkaryawan data.

**Code** : `200 OK`

**Content** : `{[]}`

### OR

**Condition** : User can see one or more trainingkaryawan data.

**Code** : `200 OK`

**Content** : In this example, the User can see one trainingkaryawan data

```json
[
    {
        "id":2,
        "jenis_pelatihan": "Pelatihan Manajemen",
        "tanggal": "2020-08-25",
        "tempat": "Surabaya",
        "filepath": "/media/trainingkaryawan/trainingkaryawan1.png",
        "uploaded_at": "2020-07-25 06:20:38.974508"
    }
]
```