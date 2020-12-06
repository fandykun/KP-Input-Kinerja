# Show All Master Dosen

Show all Master Dosen Data

**URL** : `/api/master/dosen/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Data constraints** : `{}`

## Success Responses

**Condition** : User can see all master dosen data.

**Code** : `200 OK`

**Content**

```json
[
    {
        "id": 1,
        "nama": "Prof. Ir. Abdullah Alkaf, Ph.D.",
        "NIP": "195501231980031002",
        "golongan": "IV/e",
        "jabatan_fungsional": "Guru Besar",
        "pendidikan_tertinggi": "",
        "ijazah": "Doktor",
        "jabatan": "",
        "status_kepegawaian": "PNS",
        "departemen": 1
    },
    {
        "id": 2,
        "nama": "Prof. Dr. Ir. Mohammad Nuh, DEA. ",
        "NIP": "195906171984031002",
        "golongan": "IV/e",
        "jabatan_fungsional": "Guru Besar",
        "pendidikan_tertinggi": "",
        "ijazah": "Doktor",
        "jabatan": "KETUA MWA ITS",
        "status_kepegawaian": "PNS",
        "departemen": 2
    },
    {
        "id": 3,
        "nama": "Prof. Drs.Ec. Ir. Riyanarto Sarno, M.Sc., Ph.D.",
        "NIP": "195908031986011001",
        "golongan": "IV/e",
        "jabatan_fungsional": "Guru Besar",
        "pendidikan_tertinggi": "",
        "ijazah": "S3-News Brunswick Univ Kanada",
        "jabatan": "",
        "status_kepegawaian": "PNS",
        "departemen": 4
    },
    {
        "id": 4,
        "nama": "Prof. Dr. Ir. Mochamad Ashari, M.Eng.",
        "NIP": "196510121990031003",
        "golongan": "IV/e",
        "jabatan_fungsional": "Guru Besar",
        "pendidikan_tertinggi": "",
        "ijazah": "Doktor",
        "jabatan": "Rektor ITS",
        "status_kepegawaian": "PNS",
        "departemen": 1
    },
    {
        "id": 5,
        "nama": "Prof. Dr. Ir. Arif Djunaidy, M.Sc.",
        "NIP": "195810051986031003",
        "golongan": "IV/d",
        "jabatan_fungsional": "Guru Besar",
        "pendidikan_tertinggi": "",
        "ijazah": "S3-The Victoria  Univ of Manchester",
        "jabatan": "",
        "status_kepegawaian": "PNS",
        "departemen": 5
    }
]
```