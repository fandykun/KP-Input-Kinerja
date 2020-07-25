# Update a Konferensi Data

Allow the Authenticated User to update konferensi data

**URL** : `/api/konferensi/:pk/`

**URL Parameters** : `pk=[integer]` where `pk` is the ID of the konferensi data on the
server.

**Method** : `PUT`

**Auth required** : YES

**Permissions required** : User has logged in.

**Data constraints**

```json
{
    "judul": "[unicode 255 chars max]",
    "author": "[unicode longtext field]",
    "published_at": "[unicode longtext field]",
    "url": "[unicode 255 chars max]",
    "tahun": "[unicode 4 chars max]",
    "tingkat": "[unicode 50 chars max]",
    "pi": "[unicode small integer]",
    "pn": "[unicode small integer]",
    "konf_hal": "[unicode 255 chars max]",
    "tempat": "[unicode 255 chars max]",
    "tanggal_mulai": "[date field (format: YYYY-MM-DD)]",
    "tanggal_selesai": "[date field (format: YYYY-MM-DD)]"
}
```

**Data example** Partial data is allowed, but there is only one field.

```json
{
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
    "tanggal_selesai": "2020-07-30"
}
```

## Success Responses

**Condition** : Update can be performed either fully or partially by the Authorized User.

**Code** : `200 OK`

**Content example** : For the example above, when the 'author' is updated and
posted to `/api/konferensi/2/`...

```json
{
    "id":2,
    "judul": "The 3rd International Conference on Sustainable Energy Engineering and Application (ICSEEA 2015)",
    "author": "Profesor Budiman",
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

## Error Response

**Condition** : Konferensi does not exist at URL

**Code** : `404 NOT FOUND`

**Content**
```json
{
    "detail": "Not found."
}
```

<!-- ### Or

**Condition** : Authorized User is not Owner of Account at URL.

**Code** : `403 FORBIDDEN`

**Content** : `{}` -->

<!-- ## Notes -->
