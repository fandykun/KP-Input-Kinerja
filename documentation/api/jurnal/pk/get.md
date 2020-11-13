# Show Single Konferensi Data

Show a single konferensi data if current User has access permissions to it.

**URL** : `/api/accounts/:pk/`

**URL Parameters** : `pk=[integer]` where `pk` is the ID of the Konferensi data on the
server.

**Method** : `GET`

**Auth required** : YES

**Permissions required** : User has logged in.

**Data**: `{}`

## Success Response

**Condition** : If Konferensi data exists and Authorized User has required permissions.

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

**Condition** : If Konferensi exists but Authorized User does not have required permissions.

**Code** : `403 FORBIDDEN`

**Content** :

```json
{"detail": "You do not have permission to perform this action."}
```

<!-- ## Notes

There are security issues:

* This view allows existing users to test for existence of accounts that exist
    but that they do not have access to.
* Account IDs are sequential so an authorized user can count all the Accounts
    on the system. -->