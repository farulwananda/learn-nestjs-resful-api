# User API Spec

## Register User

Endpoint : POST /api/users

Request Body:

```json
{
  "username": "farulwananda",
  "password": "rahasia",
  "name": "Farul Wananda"
}
```

Response Body (Success):

```json
{
  "data": {
    "username": "farulwananda",
    "name": "Farul Wananda"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "username already registered"
}
```

## Login User

Endpoint : POST /api/users/login

Request Body:

```json
{
  "username": "farulwananda",
  "password": "rahasia"
}
```

Response Body (Success):

```json
{
  "data": {
    "username": "farulwananda",
    "name": "Farul Wananda",
    "token": "session_id_generated"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "username or password incorrect"
}
```

## Get User

Endpoint : GET /api/users/current

Headers:

- Authorization: token

Response Body (Success):

```json
{
  "data": {
    "username": "farulwananda",
    "name": "Farul Wananda"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "unauthorized"
}
```

## Update User

Endpoint : PATCH /api/users/current

Headers:

- Authorization: token

Request Body:

```json
{
  "name": "Farul Wananda", // optional if want to change name
  "password": "rahasia" // optional if want to change password
}
```

Response Body (Success):

```json
{
  "data": {
    "username": "farulwananda",
    "name": "Farul Wananda"
  }
}
```

## Logout User

Endpoint : DELETE /api/users/current

Headers:

- Authorization: token

Response Body (Success):

```json
{
  "data": true
}
```
