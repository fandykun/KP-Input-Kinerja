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
        "topik": "asdfg",
        "pemateri": "lalalalalala",
        "institusi": "zxcv",
        "tingkat": "nasional",
        "tanggal": "2020-07-21",
        "filepath": "/media/kuliahtamu/Screenshot_1_IJjmJ7i.png",
        "uploaded_at": "2020-07-21T04:00:52.702137Z"
    }
]
```