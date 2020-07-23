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

## Departemen

* [Show All Departemen](departemen/get.md) : `GET /api/departemen/`

## Kuliah Tamu

Endpoints for viewing and manipulating kuliahtamu data.

* [Show All Kuliah Tamu](kuliahtamu/get.md) : `GET /api/kuliah-tamu/`
* [Create Kuliah Tamu](kuliahtamu/post.md) : `POST /api/kuliah-tamu/`
* [Show a Kuliah Tamu Data](kuliahtamu/pk/get.md) : `GET /api/kuliah-tamu/:pk/`
* [Update a Kuliah Tamu Data](kuliahtamu/pk/put.md) : `PUT /api/kuliah-tamu/:pk/`
* [Delete a Kuliah Tamu Data](kuliahtamu/pk/delete.md) : `DELETE /api/kuliah-tamu/:pk/`