# Show All Departemen

Show all Departemen Data

**URL** : `/api/account/change-password/`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

**Data example** All fields must be sent. 
```json
{
    "old_password": "Password_lama",
    "new_password": "password_baru"
}
```

## Success Responses

**Condition** : Password is valid

**Code** : `200 OK`

**Content**: `{}`

## Error Responses

**Condition** : If old password doesn't match

**Code** : `400 BAD REQUEST`

**Content example**
```json
{
    "old_password": [
        "Current password does not match"
    ]
}
```

### OR

**Condition** : If new password doesn't pass validation

**Code** : `400 BAD REQUEST`

**Content example**
```json
{
    "new_password": [
        "This password is too short. It must contain at least 8 characters.",
        "This password is too common."
    ]
}
```

