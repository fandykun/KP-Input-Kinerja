# REST API Documentation

## Authentication

* [Login](auth/login.md): `POST /api/login/`

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Login view above.

**Header Example**
```json
{
    "Authorization" : "Token f8d615f1add4b513dbb2f6f0debe72fb19940a26"
}
```

## Account
* [Show Account Information](account/get.md) : `GET /api/account/info/`

## Departemen
* [Show All Departemen](departemen/get.md) : `GET /api/departemen/`

## Kuliah Tamu
Endpoints for viewing and manipulating kuliahtamu data.

* [Show All Kuliah Tamu](kuliahtamu/get.md) : `GET /api/kuliah-tamu/`
* [Create Kuliah Tamu](kuliahtamu/post.md) : `POST /api/kuliah-tamu/`
* [Show a Kuliah Tamu Data](kuliahtamu/pk/get.md) : `GET /api/kuliah-tamu/:pk/`
* [Validate Kuliah Tamu Data](kuliahtamu/pk/validate.md) : `POST /api/kuliah-tamu/:pk/validate`
* [Delete a Kuliah Tamu Data](kuliahtamu/pk/delete.md) : `DELETE /api/kuliah-tamu/:pk/`

## Jurnal
Endpoints for viewing and manipulating jurnal data.

* [Show All Jurnal](jurnal/get.md) : `GET /api/jurnal/`
* [Create Jurnal](jurnal/post.md) : `POST /api/jurnal/`
* [Show a Jurnal Data](jurnal/pk/get.md) : `GET /api/jurnal/:pk/`
* [Validate Jurnal Data](jurnal/pk/validate.md) : `POST /api/jurnal/:pk/validate`
* [Delete a Jurnal Data](jurnal/pk/delete.md) : `DELETE /api/jurnal/:pk/`

## Konferensi
Endpoints for viewing and manipulating konferensi data.

* [Show All Konferensi](konferensi/get.md) : `GET /api/konferensi/`
* [Create Konferensi](konferensi/post.md) : `POST /api/konferensi/`
* [Show a Konferensi Data](konferensi/pk/get.md) : `GET /api/konferensi/:pk/`
* [Validate Konferensi Data](konferensi/pk/validate.md) : `POST /api/konferensi/:pk/validate`
* [Delete a Konferensi Data](konferensi/pk/delete.md) : `DELETE /api/konferensi/:pk/`

## Prestasi
Endpoints for viewing and manipulating prestasi data.

* [Show All Prestasi](prestasi/get.md) : `GET /api/prestasi/`
* [Create Prestasi](prestasi/post.md) : `POST /api/prestasi/`
* [Show a Prestasi Data](prestasi/pk/get.md) : `GET /api/prestasi/:pk/`
* [Validate Prestasi Data](prestasi/pk/validate.md) : `POST /api/prestasi/:pk/validate`
* [Delete a Prestasi Data](prestasi/pk/delete.md) : `DELETE /api/prestasi/:pk/`
