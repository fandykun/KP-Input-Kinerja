# Show All Kuliah Tamu

Show all Kuliah Tamu Data

**URL** : `/api/kuliah-tamu/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Data constraints** : `{}`

## Success Responses

**Condition** : User can not see any kuliah tamu data.

**Code** : `200 OK`

**Content** : `{[]}`

### OR

**Condition** : User can see one or more kuliah tamu data.

**Code** : `200 OK`

**Content** : In this example, the User can see one kuliah tamu data

```json
[
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
]
```