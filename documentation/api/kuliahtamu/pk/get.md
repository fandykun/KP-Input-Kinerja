# Show Single Kuliah Tamu Data

Show a single kuliah tamu data if current User has access permissions to it.

**URL** : `/api/accounts/:pk/`

**URL Parameters** : `pk=[integer]` where `pk` is the ID of the kuliah tamu data on the
server.

**Method** : `GET`

**Auth required** : YES

**Permissions required** : User has logged in.

**Data**: `{}`

## Success Response

**Condition** : If kuliah tamu data exists and Authorized User has required permissions.

**Code** : `200 OK`

**Content example**

```json
{
    "id": 2,
    "topik": "Machine Learning for Dummies",
    "pemateri": "Prof. Budi",
    "institusi": "Universitas Indonesia",
    "tingkat": "Nasional",
    "tanggal": "2020-07-21",
    "filepath": "/media/kuliahtamu/dokumentasi-kultam.png",
    "uploaded_at": "2020-07-21T05:16:40.733429Z"
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

<!-- ## Notes

There are security issues:

* This view allows existing users to test for existence of accounts that exist
    but that they do not have access to.
* Account IDs are sequential so an authorized user can count all the Accounts
    on the system. -->