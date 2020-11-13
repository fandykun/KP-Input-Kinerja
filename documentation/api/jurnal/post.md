# Create a Jurnal

Create a jurnal data

**URL** : `/api/jurnal/`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

**Data constraints**

```json
{
    "judul": "[unicode 255 chars max]",
    "author": "[unicode 255 chars max]",
    "published_at": "[unicode longtext field]",
    "jurnal_vol": "[unicode 100 chars max]",
    "jurnal_no": "[unicode 100 chars max]",
    "url": "[unicode 255 chars max]",
    "tahun": "[unicode 4 chars max]",
    "tingkat": "[unicode 50 chars max]",
    "pi": "[boolean field (default:false)]",
    "pn": "[boolean field] (default:false)",
    "scopus": "[boolean field] (default:false)",
    "is_validated": "[boolean field] (default:false)",
}
```

**Data example** All fields must be sent.

```json
{
    "judul": "Jurnal Dummy",
    "author": "Fandy",
    "published_at": "ITS",
    "jurnal_vol": "1",
    "jurnal_no": "1",
    "url": "google.com",
    "tahun": "2017",
    "tingkat": "Nasional",
    "pi": false,
    "pn": true,
    "scopus": true,
    "is_validated": false,
}
```

## Success Response

**Condition** : If everything is OK

**Code** : `201 CREATED`

**Content example**

```json
{
    "id": 1,
    "judul": "Jurnal Dummy",
    "author": "Fandy",
    "published_at": "ITS",
    "jurnal_vol": "1",
    "jurnal_no": "1",
    "url": "google.com",
    "tahun": "2017",
    "tingkat": "Nasional",
    "pi": false,
    "pn": true,
    "scopus": true,
    "is_validated": false,
    "uploaded_at": "2020-11-13T09:34:02.856308Z"
}
```

## Error Responses

**Condition** : If fields are missed.

**Code** : `400 BAD REQUEST`

**Content example**
```json
{
    "judul": [
        "This field is required."
    ]
}
```