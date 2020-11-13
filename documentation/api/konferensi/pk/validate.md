# Validate a Konferensi Data

Allow the Admin to validate konferensi data

**URL** : `/api/konferensi/:pk/validate`

**URL Parameters** : `pk=[integer]` where `pk` is the ID of the konferensi data on the
server.

**Method** : `POST`

**Auth required** : YES

**Permissions required** : user has admin privilege (`is_admin = True`)

**Data** : `{}`

## Success Responses

**Condition** : Validate can be performed by the Admin.

**Code** : `200 OK`

## Error Response

**Condition** : User doesn't have admin privilege

**Code** : `403 FORBIDDEN`

**Content**
```json
{
    "detail": "You do not have permission to perform this action."
}
```