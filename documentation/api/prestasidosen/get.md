# Show All Prestasi Dosen

Show all Prestasi Dosen Data

**URL** : `/api/prestasi/dosen/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Data constraints** : `{}`

## Success Responses

**Condition** : User can not see any prestasi dosen data.

**Code** : `200 OK`

**Content** : `{[]}`

### OR

**Condition** : User can see one or more prestasi dosen data.

**Code** : `200 OK`

**Content** : In this example, the User can see one prestasi dosen data

```json
[
    {
        "id": 1,
        "nama": "Prof. Ir. Abdullah Alkaf, Ph.D.",
        "NIP": "195501231980031002",
        "departemen": "Teknik Elektro",
        "kategori_peserta": "dummy 1",
        "kategori_prestasi": "dummy 2",
        "nama_penghargaan": "dummy 3",
        "jenis_penghargaan": "dummy 4",
        "lembaga_penyelenggara": "dummy 5",
        "capaian": "dummy 6",
        "web_berita": "dummy 7",
        "tanggal": "2020-12-06",
        "filepath": null,
        "is_validated": true,
        "uploaded_at": "2020-12-06T07:28:49.082831Z"
    }
]
```