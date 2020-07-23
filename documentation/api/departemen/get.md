# Show All Departemen

Show all Departemen Data

**URL** : `/api/departemen/`

**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

**Data constraints** : `{}`

## Success Responses

**Condition** : User can see all departemen data.

**Code** : `200 OK`

**Content**

```json
[
    {
        "id": 1,
        "nama": "Teknik Elektro"
    },
    {
        "id": 2,
        "nama": "Teknik Biomedik"
    },
    {
        "id": 3,
        "nama": "Teknik Komputer"
    },
    {
        "id": 4,
        "nama": "Informatika"
    },
    {
        "id": 5,
        "nama": "Sistem Informasi"
    },
    {
        "id": 6,
        "nama": "Teknologi Informasi"
    }
]
```