# Update a Training Data

Allow the Authenticated User to update training data

**URL** : `/api/training/:pk/`

**URL Parameters** : `pk=[integer]` where `pk` is the ID of the training data on the
server.

**Method** : `PUT`

**Auth required** : YES

**Permissions required** : User has logged in.

**Data constraints**

```json
{
    "peserta":"[unicode longtext field]",
    "jenis":"[unicode 50 chars max]",
    "judul": "[unicode 255 chars max]",
    "tempat": "[unicode 255 chars max]",
    "date_start": "[date field (format: YYYY-MM-DD)]",
    "date_end": "[date field (format: YYYY-MM-DD)]",
    "filepath":"[file uploaded using multipart/form-data]"
}
```

**Data example** Partial data is allowed, but there is only one field.

```json
{
    "peserta":"Bapak dosen",
    "jenis":"Dosen",
    "judul": "Pelatihan Mengajar",
    "tempat": "Surabaya",
    "date_start": "2020-08-25",
    "date_end": "2020-08-26",
    "filepath": "/media/training/training1.png"
}
```

## Success Responses

**Condition** : Update can be performed either fully or partially by the Authorized User.

**Code** : `200 OK`

**Content example** : For the example above, when the 'judul' is updated and
posted to `/api/training/2/`...

```json
{
    "id":2,
    "peserta":"Bapak dosen",
    "jenis":"Dosen",
    "judul": "Pelatihan Mengajar Dosen",
    "tempat": "Surabaya",
    "date_start": "2020-08-25",
    "date_end": "2020-08-26",
    "filepath": "/media/training/training1.png",
    "uploaded_at": "2020-07-25 06:20:38.974508"
}
```

## Error Response

**Condition** : training does not exist at URL

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
