# Update a Kuliah Tamu Data

Allow the Authenticated User to update kuliah tamu data

**URL** : `/api/kuliah-tamu/:pk/`

**URL Parameters** : `pk=[integer]` where `pk` is the ID of the kuliah tamu data on the
server.

**Method** : `PUT`

**Auth required** : YES

**Permissions required** : User has logged in.

**Data constraints**

```json
{
    "topik": "[unicode 255 chars max]",
    "pemateri": "[unicode longtext field]",
    "institusi": "[unicode 255 chars max]",
    "tingkat": "[unicode 100 chars max]",
    "tanggal": "[date field (format: YYYY-MM-DD)]",
    "filepath": "[file uploaded using multipart/form-data]"
}
```

**Data example** Partial data is allowed, but there is only one field.

```json
{
    "topik": "Machine Learning for Dummies",
    "pemateri": "Prof. Budi",
    "institusi": "Universitas Indonesia",
    "tingkat": "Nasional",
    "tanggal": "2020-07-21",
    "filepath": "dokumentasi-kultam.png"
}
```

## Success Responses

**Condition** : Update can be performed either fully or partially by the Authorized User.

**Code** : `200 OK`

**Content example** : For the example above, when the 'pemateri' is updated and
posted to `/api/kuliah-tamu/2/`...

```json
{
    "id": 2,
    "topik": "Machine Learning for Dummies",
    "pemateri": "Prof. Aan",
    "institusi": "Universitas Indonesia",
    "tingkat": "Nasional",
    "tanggal": "2020-07-21",
    "filepath": "/media/kuliahtamu/dokumentasi-kultam.png",
    "uploaded_at": "2020-07-21T05:16:40.733429Z"
}
```

## Error Response

**Condition** : Kuliah Tamu does not exist at URL

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
