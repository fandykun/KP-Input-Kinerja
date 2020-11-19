# Show All Prestasi

Show all Prestasi Data

**URL** : `/api/prestasi/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Data constraints** : `{}`

## Success Responses

**Condition** : User can not see any prestasi data.

**Code** : `200 OK`

**Content** : `{[]}`

### OR

**Condition** : User can see one or more prestasi data.

**Code** : `200 OK`

**Content** : In this example, the User can see one prestasi data

```json
[
    {
        "id":2,
        "name": "Fadhil Musaad, Fandykun",
        "lomba": "Compfest",
        "tingkat": "Nasional",
        "jenis": "Mahasiswa",
        "peringkat": "Pertama",
        "tanggal": "2020-08-25",
        "url": "www.prestasi.com",
        "filepath": "/media/prestasi/prestasi_mhs1.png",
        "uploaded_at": "2020-07-25 06:20:38.974508"
    }
]
```