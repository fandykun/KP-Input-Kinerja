# Show Single Konferensi Data

Show a single konferensi data if current User has access permissions to it.

**URL** : `/api/konferensi/:pk/`

**URL Parameters** : `pk=[integer]` where `pk` is the ID of the Konferensi data on the
server.

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Data**: `{}`

## Success Response

**Condition** : If Konferensi data exists and Authorized User has required permissions.

**Code** : `200 OK`

**Content example**

```json
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

**Condition** : If Konferensi exists but Anonymous User does not have required permissions.

**Code** : `403 FORBIDDEN`

**Content** :

```json
{"detail": "You do not have permission to perform this action."}
```