# Update a Prestasi Data

Allow the Authenticated User to update prestasi data

**URL** : `/api/prestasi/:pk/`

**URL Parameters** : `pk=[integer]` where `pk` is the ID of the prestasi data on the
server.

**Method** : `PUT`

**Auth required** : YES

**Permissions required** : User has logged in.

**Data constraints**

```json
{
    "name": "[unicode 255 chars max]",
    "tingkat": "[unicode 100 chars max]",
    "peringkat": "[unicode 100 chars max]",
    "tanggal": "[date field (format: YYYY-MM-DD)]",
    "url": "[unicode 255 chars max]",
    "filepath":"[file uploaded using multipart/form-data]",
    "is_validated": "[boolean field]"
}
```

**Data example** Partial data is allowed, but there is only one field.

```json
{
    "name": "Fadhil Musaad, Fandykun",
    "tingkat": "Nasional",
    "peringkat": "Pertama",
    "tanggal": "2020-08-25",
    "url": "www.prestasi.com",
    "filepath": "prestasi_mhs1.png",
    "is_validated": "1"
}
```

## Success Responses

**Condition** : Update can be performed either fully or partially by the Authorized User.

**Code** : `200 OK`

**Content example** : For the example above, when the 'author' is updated and
posted to `/api/prestasi/2/`...

```json
{
    "id":2,
    "name": "Fadhil Musaad, Fandykuncoro",
    "tingkat": "Nasional",
    "peringkat": "Pertama",
    "tanggal": "2020-08-25",
    "url": "www.prestasi.com",
    "filepath": "/media/prestasi/prestasi_mhs1.png",
    "uploaded_at": "2020-07-25 06:20:38.974508",
    "is_validated": "1"
}
```

## Error Response

**Condition** : Prestasi does not exist at URL

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
