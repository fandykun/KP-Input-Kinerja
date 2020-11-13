# Show Single Kuliah Tamu Data

Show a single kuliah tamu data if current User has access permissions to it.

**URL** : `/api/kuliah-tamu/:pk/`

**URL Parameters** : `pk=[integer]` where `pk` is the ID of the kuliah tamu data on the
server.

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None
**Data**: `{}`

## Success Response

**Condition** : If kuliah tamu data exists and Authorized User has required permissions.

**Code** : `200 OK`

**Content example**

```json
{
    "id": 1,
    "topik": "Machine Learning for Dummies",
    "pemateri": "Prof. Budi",
    "institusi": "Universitas Indonesia",
    "tingkat": "Nasional",
    "tanggal": "2020-07-21",
    "filepath": "/media/kuliahtamu/Capture2.PNG",
    "is_validated": false,
    "uploaded_at": "2020-11-13T14:38:54.222053Z",
    "departemen": 1
}
```

## Error Responses

**Condition** : If Kuliah tamu data does not exist with `id` of provided `pk` parameter.

**Code** : `404 NOT FOUND`

**Content** 
```json
{
    "detail": "Not found."
}
```

### Or

**Condition** : If Kuliah Tamu exists but Authorized User does not have required permissions.

**Code** : `403 FORBIDDEN`

**Content** :

```json
{"detail": "You do not have permission to perform this action."}
```