# Delete a Jurnal Data

Allow the Admin to delete Jurnal data

**URL** : `/api/jurnal/:pk/`

**URL Parameters** : `pk=[integer]` where `pk` is the ID of the Jurnal in the
database.

**Method** : `DELETE`

**Auth required** : YES

**Permissions required** : user has admin privilege (`is_admin = True`)

**Data** : `{}`

## Success Response

**Condition** : If the jurnal data exists.

**Code** : `204 NO CONTENT`

**Content** : `{}`

## Error Responses

**Condition** : If there was no jurnal data available to delete.

**Code** : `404 NOT FOUND`

**Content**
```json
{
    "detail": "Not found."
}
```