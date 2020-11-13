# Show All Konferensi

Show all Konferensi Data

**URL** : `/api/konferensi/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Data constraints** : `{}`

## Success Responses

**Condition** : User can not see any konferensi data.

**Code** : `200 OK`

**Content** : `{[]}`

### OR

**Condition** : User can see one or more konferensi data.

**Code** : `200 OK`

**Content** : In this example, the User can see one konferensi data

```json
[
    {
        "id": 1,
        "judul": "The 3rd International Conference on Sustainable Energy Engineering and Application (ICSEEA 2015)",
        "author": "Profesor Alex",
        "published_at": "Konferensi Surabaya",
        "url": "www.konferensi.com",
        "tahun": "2020",
        "tingkat": "Nasional",
        "pi": false,
        "pn": false,
        "scopus": false,
        "konf_hal": "100",
        "tempat": "Surabaya",
        "tanggal_mulai": "2020-07-25",
        "tanggal_selesai": "2020-07-30",
        "is_validated": false,
        "uploaded_at": "2020-11-13T12:56:05.185367Z"
    }
]
```