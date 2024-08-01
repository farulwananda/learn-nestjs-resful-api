# Address API Spec

## Create Address

Endpoint : POST /api/contacts/:contactId/addresses

Headers:

- Authorization: token

Request Body:

```json
{
  "street": "Jalan Indonesia, optional",
  "city": "Kota, optional",
  "province": "Provinsi, optional",
  "country": "Indonesia",
  "postal_code": "9991"
}
```

Response Body:

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Indonesia, optional",
    "city": "Kota, optional",
    "province": "Provinsi, optional",
    "country": "Indonesia",
    "postal_code": "9991"
  }
}
```

## Get Address

Endpoint : GET /api/contacts/:contactId/addresses/:addressId

Headers:

- Authorization: token

Response Body:

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Indonesia, optional",
    "city": "Kota, optional",
    "province": "Provinsi, optional",
    "country": "Indonesia",
    "postal_code": "9991"
  }
}
```

## Update Address

Endpoint : PUT /api/contacts/:contactId/addresses/:addressId

Headers:

- Authorization: token

Request Body:

```json
{
  "street": "Jalan Indonesia, optional",
  "city": "Kota, optional",
  "province": "Provinsi, optional",
  "country": "Indonesia",
  "postal_code": "9991"
}
```

Response Body:

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Indonesia, optional",
    "city": "Kota, optional",
    "province": "Provinsi, optional",
    "country": "Indonesia",
    "postal_code": "9991"
  }
}
```

## Remove Address

Endpoint : DELETE /api/contacts/:contactId/addresses/:addressId

Headers:

- Authorization: token

Response Body:

```json
{
  "data": true
}
```

## Search Address

Endpoint : GET /api/contacts/:contactId/addresses

Headers:

- Authorization: token

Response Body:

```json
{
  "data": [
    {
      "id": 1,
      "street": "Jalan Indonesia, optional",
      "city": "Kota, optional",
      "province": "Provinsi, optional",
      "country": "Indonesia",
      "postal_code": "9991"
    },
    {
      "id": 2,
      "street": "Jalan Indonesia, optional",
      "city": "Kota, optional",
      "province": "Provinsi, optional",
      "country": "Indonesia",
      "postal_code": "9991"
    }
  ]
}
```
