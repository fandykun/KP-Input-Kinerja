# Show All Jurnal

Show all Jurnal Data

**URL** : `/api/jurnal/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Data constraints** : `{}`

## Success Responses

**Condition** : User can not see any jurnal data.

**Code** : `200 OK`

**Content** : `{[]}`

### OR

**Condition** : User can see one or more jurnal data.

**Code** : `200 OK`

**Content** : In this example, the User can see one jurnal data

```json
[
    {
        "id": 1,
        "judul": "Jurnal Dummy",
        "author": "Fandy",
        "published_at": "ITS",
        "jurnal_vol": "1",
        "jurnal_no": "1",
        "url": "google.com",
        "tahun": "2017",
        "tingkat": "Nasional",
        "pi": false,
        "pn": true,
        "scopus": true,
        "is_validated": false,
        "uploaded_at": "2020-11-13T09:34:02.856308Z"
    }
]
```