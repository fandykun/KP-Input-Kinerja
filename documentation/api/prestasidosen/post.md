# Create a Prestasi Dosen

Create a prestasi dosen data

**URL** : `/api/prestasi/dosen/`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

**Data constraints**

```json
{
    "dosen": "[dosen_id]",
    "kategori_peserta": "[unicode 100 chars max]",
    "kategori_prestasi": "[unicode 100 chars max]",
    "nama_penghargaan": "[unicode 100 chars max]",
    "jenis_penghargaan": "[unicode 100 chars max]",
    "lembaga_penyelenggara": "[unicode 100 chars max]",
    "capaian": "[unicode 100 chars max]",
    "web_berita": "[unicode 255 chars max]",
    "tanggal": "[date field (format: YYYY-MM-DD)]",
    "filepath":"[file uploaded using multipart/form-data] (nullable)",
}
```

**Data example** All fields must be sent.

```json
{
    "dosen": 5,
    "kategori_peserta": "Individu",
    "kategori_prestasi": "Nasional",
    "nama_penghargaan": "SINTA Award 2019",
    "jenis_penghargaan": "Penulis Ilmiah Terproduktif",
    "lembaga_penyelenggara": "Kemenristek/BRIN",
    "capaian": "Peringkat 1",
    "web_berita": "https://www.its.ac.id/informatika/terima-anugerah-dari-kemenristek-brin-dosen-its-peringkat-1-scopus/",
    "tanggal": "2019-05-28"
}
```

## Success Response

**Condition** : If everything is OK

**Code** : `201 CREATED`

**Content example**

```json
{
    "id": 1,
    "nama": "Prof. Dr. Ir. Arif Djunaidy, M.Sc.",
    "NIP": "195810051986031003",
    "departemen": "Sistem Informasi",
    "kategori_peserta": "Individu",
    "kategori_prestasi": "Nasional",
    "nama_penghargaan": "SINTA Award 2019",
    "jenis_penghargaan": "Penulis Ilmiah Terproduktif",
    "lembaga_penyelenggara": "Kemenristek/BRIN",
    "capaian": "Peringkat 1",
    "web_berita": "https://www.its.ac.id/informatika/terima-anugerah-dari-kemenristek-brin-dosen-its-peringkat-1-scopus/",
    "tanggal": "2019-05-28",
    "filepath": null,
    "is_validated": false,
    "uploaded_at": "2020-12-06T08:31:06.568019Z"
}
```

## Error Responses

**Condition** : If tanggal field is in the wrong format

**Code** : `400 BAD REQUEST`

**Content**
```json
{
    "tanggal": [
        "Date has wrong format. Use one of these formats instead: YYYY-MM-DD."
    ]
}
```

### Or

**Condition** : If fields are missed.

**Code** : `400 BAD REQUEST`

**Content example**
```json
{
    "nama": [
        "This field is required."
    ]
}
```