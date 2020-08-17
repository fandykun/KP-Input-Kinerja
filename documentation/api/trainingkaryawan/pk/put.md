# Update a TrainingKaryawan Data

Allow the Authenticated User to update trainingkaryawan data

**URL** : `/api/trainingkaryawan/:pk/`

**URL Parameters** : `pk=[integer]` where `pk` is the ID of the trainingkaryawan data on the
server.

**Method** : `PUT`

**Auth required** : YES

**Permissions required** : User has logged in.

**Data constraints**

```json
{
    "jenis_pelatihan": "[unicode 255 chars max]",
    "tempat": "[unicode 255 chars max]",
    "tanggal": "[date field (format: YYYY-MM-DD)]",
    "filepath":"[file uploaded using multipart/form-data]"
}
```

**Data example** Partial data is allowed, but there is only one field.

```json
{
    "jenis_pelatihan": "Pelatihan Manajemen",
    "tanggal": "2020-08-25",
    "tempat": "Surabaya",
    "filepath": "/media/trainingkaryawan/trainingkaryawan1.png"
}
```

## Success Responses

**Condition** : Update can be performed either fully or partially by the Authorized User.

**Code** : `200 OK`

**Content example** : For the example above, when the 'tempat' is updated and
posted to `/api/trainingkaryawan/2/`...

```json
{
    "id":2,
    "jenis_pelatihan": "Pelatihan Manajemen",
    "tanggal": "2020-08-25",
    "tempat": "Bandung",
    "filepath": "/media/trainingkaryawan/trainingkaryawan1.png",
    "uploaded_at": "2020-07-25 06:20:38.974508"
}
```

## Error Response

**Condition** : TrainingKaryawan does not exist at URL

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
