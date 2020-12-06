# Show Single Prestasi Dosen Data

Show a single prestasi dosen data if current User has access permissions to it.

**URL** : `/api/prestasi/dosen/:pk/`

**URL Parameters** : `pk=[integer]` where `pk` is the ID of the Prestasi dosen data on the
server.

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Data**: `{}`

## Success Response

**Condition** : If Prestasi Dosen data exists and Authorized User has required permissions.

**Code** : `200 OK`

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

**Condition** : If Prestasi Dosen data does not exist with `id` of provided `pk` parameter.

**Code** : `404 NOT FOUND`

**Content** 
```json
{
    "detail": "Not found."
}
```

### Or

**Condition** : If Prestasi Dosen exists but Authorized User does not have required permissions.

**Code** : `403 FORBIDDEN`

**Content** :

```json
{"detail": "You do not have permission to perform this action."}
```