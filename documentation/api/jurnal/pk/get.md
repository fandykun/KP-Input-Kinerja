# Show Single Jurnal Data

Show a single Jurnal data

**URL** : `/api/jurnal/:pk/`

**URL Parameters** : `pk=[integer]` where `pk` is the ID of the Konferensi data on the
server.

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Data**: `{}`

## Success Response

**Condition** : If Konferensi data exists.

**Code** : `200 OK`

**Content example**

```json
{
    "id":2,
    "judul": "The 3rd International Conference on Sustainable Energy Engineering and Application (ICSEEA 2015)",
    "author": "Profesor Alex",
    "published_at": "Konferensi Surabaya",
    "url": "www.konferensi.com",
    "tahun": "2020",
    "tingkat": "Nasional",
    "pi": "4",
    "pn": "4",
    "konf_hal": "100",
    "tempat": "Surabaya",
    "tanggal_mulai": "2020-07-25",
    "tanggal_selesai": "2020-07-30",
    "uploaded_at": "2020-07-25 06:20:38.974508"
}
```

## Error Responses

**Condition** : If Konferensi data does not exist with `id` of provided `pk` parameter.

**Code** : `404 NOT FOUND`

**Content** 
```json
{
    "detail": "Not found."
}
```

### Or

**Condition** : If Konferensi exists but AnonymousUser does not have required permissions.

**Code** : `403 FORBIDDEN`

**Content** :

```json
{"detail": "You do not have permission to perform this action."}
```