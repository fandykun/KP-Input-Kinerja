# Show Single Training Data

Show a single Training data if current User has access permissions to it.

**URL** : `/api/training/:pk/`

**URL Parameters** : `pk=[integer]` where `pk` is the ID of the Training data on the
server.

**Method** : `GET`

**Auth required** : YES

**Permissions required** : User has logged in.

**Data**: `{}`

## Success Response

**Condition** : If training data exists and Authorized User has required permissions.

**Code** : `200 OK`

**Content example**

```json
{
    "id":2,
    "peserta":"Bapak dosen",
    "jenis":"Dosen",
    "judul": "Pelatihan Mengajar",
    "tempat": "Surabaya",
    "date_start": "2020-08-25",
    "date_end": "2020-08-26",
    "filepath": "/media/training/training1.png",
    "uploaded_at": "2020-07-25 06:20:38.974508",
    "departemen": 1
}
```

## Error Responses

**Condition** : If Training data does not exist with `id` of provided `pk` parameter.

**Code** : `404 NOT FOUND`

**Content** 
```json
{
    "detail": "Not found."
}
```

### Or

**Condition** : If Training exists but Authorized User does not have required permissions.

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