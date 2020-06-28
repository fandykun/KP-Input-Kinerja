# KP-Input-Kinerja

## Prerequisites

- Requirements
```bash
    pip install -r requirements.txt
```

- Konfigurasi DB (Menggunakan MySQL)
    Setting konfigurasi mysql.cnf sesuai nama db
```bash
    cp mysql.cnf.example mysql.cnf
```

- Init DB `python manage.py makemigrations`
- migrate DB `python manage.py migrate`

# How to run
- `python manage.py runserver`