# Delete a Kuliah Tamu Data

Allow the Authenticated User to delete kuliah tamu data

**URL** : `/api/accounts/:pk/`

**URL Parameters** : `pk=[integer]` where `pk` is the ID of the Account in the
database.

**Method** : `DELETE`

**Auth required** : YES

**Permissions required** : User has logged in.

**Data** : `{}`

## Success Response

**Condition** : If the kuliah tamu data exists.

**Code** : `204 NO CONTENT`

**Content** : `{}`

## Error Responses

**Condition** : If there was no kuliah tamu data available to delete.

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

**Content** : `{}`


## Notes

* Will remove memberships for this Account for all Users that had access. -->