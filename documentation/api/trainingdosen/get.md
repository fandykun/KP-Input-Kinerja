# Show All TrainingDosen

Show all TrainingDosen Data

**URL** : `/api/trainingdosen/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Data constraints** : `{}`

## Success Responses

**Condition** : User can not see any trainingdosen data.

**Code** : `200 OK`

**Content** : `{[]}`

### OR

**Condition** : User can see one or more trainingdosen data.

**Code** : `200 OK`

**Content** : In this example, the User can see one trainingdosen data

```json
[
    {
        "id":2,
        "judul": "Pelatihan Mengajar",
        "tempat": "Surabaya",
        "date_start": "2020-08-25",
        "date_end": "2020-08-26",
        "filepath": "/media/trainingdosen/trainingdosen1.png",
        "uploaded_at": "2020-07-25 06:20:38.974508"
    }
]
```