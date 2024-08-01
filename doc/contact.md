# Contact API Spec

## Create Contact

Endpoint : POST /api/contacts

Headers:

- Authorization: token

Request Body:

```json
{
  "first_name": "Farul",
  "last_name": "Wananda",
  "email": "farulwananda@example.com",
  "phone": "09988866"
}
```

Response Body:

```json
{
  "data": {
    "id": 1,
    "first_name": "Farul",
    "last_name": "Wananda",
    "email": "farulwananda@example.com",
    "phone": "09988866"
  }
}
```

## Get Contact

Endpoint : GET /api/contacts/:contactId

Headers:

- Authorization: token

Response Body:

```json
{
  "data": {
    "id": 1,
    "first_name": "Farul",
    "last_name": "Wananda",
    "email": "farulwananda@example.com",
    "phone": "09988866"
  }
}
```

## Update Contact

Endpoint : PUT /api/contacts/:contactId

Headers:

- Authorization: token

Request Body:

```json
{
  "first_name": "Farul",
  "last_name": "Wananda",
  "email": "farulwananda@example.com",
  "phone": "09988866"
}
```

Response Body:

```json
{
  "data": {
    "id": 1,
    "first_name": "Farul",
    "last_name": "Wananda",
    "email": "farulwananda@example.com",
    "phone": "09988866"
  }
}
```

## Remove Contact

Endpoint : DELETE /api/contacts/:contactId

Headers:

- Authorization: token

Response Body:

```json
{
  "data": true
}
```

## Search Contact

Endpoint : GET /api/contacts

Headers:

- Authorization: token

Query Params:

- name: string, contact first name or contact last name, optional
- phone: string, contact phone, optional,
- email: string, contact email, optional
- page: number, default 1
- size: number, default 10

Response Body:

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "Farul",
      "last_name": "Wananda",
      "email": "farulwananda@example.com",
      "phone": "09988866"
    },
    {
      "id": 2,
      "first_name": "Farul",
      "last_name": "Wananda",
      "email": "farulwananda@example.com",
      "phone": "09988866"
    }
  ],
  "paging": {
    "current_page": 1,
    "total_page": 10,
    "size": 10
  }
}
```
