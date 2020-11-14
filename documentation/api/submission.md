# Show All Non Validate Data 

Show all Non Validate Data

**URL** : `/api/submission/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : user has admin privilege (`is_admin = True`)

**Data constraints** : `{}`

## Success Responses

**Condition** : User has logged in

**Code** : `200 OK`

**Content**

```json
[
    {
        "id": 1,
        "modul": "jurnal",
        "judul": "Jurnal Dummy",
        "nama": "Fandy"
    },
    {
        "id": 2,
        "modul": "konferensi",
        "judul": "Konferensi Dummy",
        "nama": "heehaerha"
    },
    {
        "id": 1,
        "modul": "kuliahtamu",
        "judul": "Machine Learning for Dummies",
        "nama": "Prof. Budi"
    },
    {
        "id": 2,
        "modul": "kuliahtamu",
        "judul": "HAHAHAHA",
        "nama": "Prof. Budi"
    },
    {
        "id": 1,
        "modul": "prestasi",
        "judul": "ngoding",
        "nama": "Fandy Kuncoro"
    }
]
```