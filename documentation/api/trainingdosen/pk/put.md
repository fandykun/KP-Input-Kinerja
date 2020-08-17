# Update a TrainingDosen Data

Allow the Authenticated User to update trainingdosen data

**URL** : `/api/trainingdosen/:pk/`

**URL Parameters** : `pk=[integer]` where `pk` is the ID of the trainingdosen data on the
server.

**Method** : `PUT`

**Auth required** : YES

**Permissions required** : User has logged in.

**Data constraints**

```json
{
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
    "judul": "Pelatihan Mengajar",
    "tempat": "Surabaya",
    "date_start": "2020-08-25",
    "date_end": "2020-08-26",
    "filepath": "/media/trainingdosen/trainingdosen1.png"
}
```

## Success Responses

**Condition** : Update can be performed either fully or partially by the Authorized User.

**Code** : `200 OK`

**Content example** : For the example above, when the 'judul' is updated and
posted to `/api/trainingdosen/2/`...

```json
{
    "id":2,
    "judul": "Pelatihan Mengajar Dosen",
    "tempat": "Surabaya",
    "date_start": "2020-08-25",
    "date_end": "2020-08-26",
    "filepath": "/media/trainingdosen/trainingdosen1.png",
    "uploaded_at": "2020-07-25 06:20:38.974508"
}
```

## Error Response

**Condition** : TrainingDosen does not exist at URL

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
