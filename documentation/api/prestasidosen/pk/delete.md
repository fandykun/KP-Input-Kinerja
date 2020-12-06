# Delete a Prestasi Dosen Data

Allow the Authenticated User to delete Prestasi Dosen data

**URL** : `/api/prestasi/dosen/:pk/`

**URL Parameters** : `pk=[integer]` where `pk` is the ID of the Account in the
database.

**Method** : `DELETE`

**Auth required** : YES

**Permissions required** : user has admin privilege (`is_admin = True`)

**Data** : `{}`

## Success Response

**Condition** : If the Prestasi dosen data exists.

**Code** : `204 NO CONTENT`

**Content** : `{}`

## Error Responses

**Condition** : If there was no Prestasi dosen data available to delete.

**Code** : `404 NOT FOUND`

**Content**
```json
{
    "detail": "Not found."
}
```

### Or

**Condition** : Authorized User is not an Admin.

**Code** : `403 FORBIDDEN`

**Content** : 
```json
{
    "detail": "You do not have permission to perform this action."
}
```