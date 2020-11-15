# Show All Departemen

Show all Departemen Data

**URL** : `/api/account/info/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Data constraints** : `{}`

## Success Responses

**Condition** : User has logged in

**Code** : `200 OK`

**Content**

```json
{
    "username": "fandykun",
    "is_admin": false,
    "departemen": "Informatika",
    "mahasiswa": {
        "id": 1,
        "nama": "Fandy Kuncoro",
        "NRP": "0511174000118",
        "created_at": "2020-11-14T13:54:38.657057Z",
        "updated_at": "2020-11-14T13:54:38.657057Z",
        "departemen": 4
    },
    "dosen": null,
    "tendik": null
}
```