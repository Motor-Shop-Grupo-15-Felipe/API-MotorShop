# MotorShop

<h2>API documentation</h2

## MAIN TECNOLOGIES AND FRAMEWORKS

- [TypeScript](https://www.typescriptlang.org/)
- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [UUID](https://www.npmjs.com/package/uuid/)


 <h3>DIAGRAM OF RELATIONS:</h3>
 
 - [Diagram Link](https://drive.google.com/file/d/1u89c9MA_gQmjRl1cLfytNi57ix5rO4uR/view?usp=sharing/)

<h3>APPLICATION URL:</h3>
<ul>
 <li>.</li>
</ul>

<h3>INSTALLING DEPENDENCIES:</h3>
<ul>
<li>After cloning the repository to your machine locally, run the code:</li>
 
 ```shell
yarn
```
 
</ul>

<h3>SETTING AND RUNNING THE PROJECT LOCALLY:</h3>
<ul>
<li>In your cloned project folder, create a copy of the file ".env.example" and its content, renaming to ".env" and fill in the relevant information</li>
<li>Run the following command to execute the migrations</li>
 
 ```shell
yarn typeorm migration:run -d src/data-source.ts
```
 
<li>To run the server locally, and execute the command</li>
 
 ```shell
yarn dev
```
 
</ul>

---

<h3>ENDPOINTS:</h3>
<details>
  <summary>USERS</summary>
  <ul>
  <li>POST - /users</li>
  <li>GET - /users</li>
   <li>GET - /users/:id</li>
  <li>PATCH - /users/:id</li>
  <li>DELETE - /users/:id</li>
    </ul>
</details>
<details>
  <summary>SESSIONS</summary>
  <ul>
  <li>POST - /login</li>
  </ul>
</details>
<details>
  <summary>ADS</summary>
  <ul>
  <li>POST - /ads</li>
  <li>GET - /ads</li>
  <li>GET - /ads/:id</li>
  <li>PATCH - /ads/:id</li>
  <li>DELETE - /ads/:id</li>
  </ul>
</details>
<details>
  <summary>COMMENTS</summary>
  <ul>
  <li>POST - /comment</li>
  <li>GET - /comment</li>
  <li>GET - /comment/:id</li>
  <li>PATCH - /comment/:id</li>
  <li>DELETE - /comment/:id</li>
  </ul>
</details>
<details>
<summary>IMAGES</summary>
  <ul>
  <li>POST - /</li>
  <li>GET - /</li>
  <li>GET - //:id</li>
  <li>PATCH - //:id</li>
  <li>DELETE - //:id</li>
  </ul>
</details>

---

## 1. **Users**

| HTTP Method   | Route          | Description                                                |
|---------------|----------------|------------------------------------------------------------|
| POST          | /users         | User creation                                              |
| GET           | /users         | List all users                                             |
| GET           | /users/:id     | List a user using its ID as a parameter                    |
| PATCH         | /users/:id     | Updates a user's information using their ID as a parameter |
| DELETE        | /users/:id     | Deletes a user using its ID as a parameter                 |

---

<h4>User Creation - POST</h4>

`/users`

<h5>Request example -</h5>

```
POST /users
Host: 
Authorization: None
Content-type: application/json

```

<h5>Request body -</h5>

```json
{
    "name": "Gabriella",
    "email": "gabriellaTest@mail.com",
    "phone": "000000000",
    "cpf" : "111.111.111.11"
    "address" : ""
    "date_of_birth": "11 / 11 / 1111"
    "description" : "Hi! I'm Gabe and i..."
    "password": "test12345",
}
```

<h5>Response example -</h5>

```
201 Created
```

```json
{
    "id": "xxxxxxx" (UUID),
    "name": "Gabriella",
    "email": "gabriellaTest@mail.com",
    "phone": "000000000",
    "cpf" : "111.111.111.11"
    "address" : ""
    "date_of_birth": "11 / 11 / 1111"
    "description" : "Hi! I'm Gabe and i..."
    "createdAt": "Y/D/M TIME"
    
}
```

Possible Errors:
| Error code      | Description               |
|-----------------|---------------------------|
| 400 Bad Request | Email already being used  |

---

<h4>Listing all users - GET</h4>

`/users`

<h5>Request example -</h5>

```
GET /users
Host: 
Authorization: Bearer Token
Content-type: application/json
```

<h5>Request body -</h5>

```
EMPTY
```

<h5>Response example -</h5>

```
200 OK
```

```json
[
    {
        "id": "xxxxxxx" (UUID),
        "name": "Gabriella",
        "email": "gabriellaTest@mail.com",
        "phone": "000000000",
        "cpf" : "111.111.111.11"
        "address" : ""
        "date_of_birth": "11 / 11 / 1111"
        "description" : "Hi! I'm Gabe and i..."
        "createdAt": "Y/D/M TIME"
    }
]
```

Possible Errors:
| Error code | Description |
|----------------|-----------|
| 401 Unauthorized | Invalid token |

---

<h4> List user by ID - GET</h4>

### `/users/:id`

<h5>Request example -</h5>

```
GET /users/:id
Host: 
Authorization: Bearer Token
Content-type: application/json
```

<h5>Request body -</h5>

```
EMPTY
```

<h5>Response example -</h5>

```
200 OK
```

```json
[
    {
        "id": "xxxxxxx" (UUID),
        "name": "Gabriella",
        "email": "gabriellaTest@mail.com",
        "phone": "000000000",
        "cpf" : "111.111.111.11"
        "address" : ""
        "date_of_birth": "11 / 11 / 1111"
        "description" : "Hi! I'm Gabe and i..."
        "createdAt": "Y/D/M TIME"
    }
]
```

Possible Errors:
| Error code | Description |
|----------------|-----------|
| 401 Unauthorized | Invalid token  |
| 404 Not Found    | User not found |

---

<h4> Update User by ID - PATCH</h4>

`/users/:id`

<h5>Request example -</h5>

```
PATCH /users/:id
Host: 
Authorization: Bearer Token
Content-type: application/json
```

<h5>Request body -</h5>
<p>Being able to update parcially or all user's informations(except the user's ID or Email)</p>

```json
  { 
       "phone": "0000000222",
  }

```

<h5>Response example -</h5>

```
200 OK
```

```json
[
    {
        "id": "xxxxxxx" (UUID),
        "name": "Gabriella",
        "email": "gabriellaTest@mail.com",
        "phone": "0000000222",
        "cpf" : "111.111.111.11"
        "address" : ""
        "date_of_birth": "11 / 11 / 1111"
        "description" : "Hi! I'm Gabe and i..."
        "createdAt": "Y/D/M TIME"
    }
]
```

Possible errors:
| Error code | Description |
|----------------|-----------|
| 401 Unauthorized | Invalid token |
| 401 Unauthorized | Not the same user who is logged |
| 401 Unauthorized | Can not change the user's id and/or email |
| 404 Not Found    | User not found |

---

<h4>Delete User by ID - DELETE</h4>

`/users/:id`

<h5>Request example -</h5>

```
DELETE /users/:id
Host: 
Authorization: Bearer Token
Content-type: application/json
```

<h5>Request body -</h5>

```
EMPTY
```

<h5>Response example -</h5>

``` 
204 No Content
```

Possible errors:
| Error code | Description |
|----------------|-----------|
| 401 Unauthorized | Invalid token |
| 401 Unauthorized | Not the same user who is logged |
| 404 Not Found    | User not found |

---

<h4>LogIn - POST</h4>

```/login```

<h5>Request example -</h5>

```
POST /login
Host: 
Authorization: None
Content-type: application/json
```

<h5>Request body -</h5>

```json
{
    
    "email": "gabriellaTest@mail.com",
    "password": "test12345",
}
```

<h5>Response example -</h5>

```
200 OK
```

```json
{
    "token": "eufghueuheujbjsdbjsfeieajlalala..."
}
```

Possible errors:
| Error code | Description |
|----------------|-----------|
| 403 Forbidden  | Incorrect email or password |

---

## 2. **Ads**

| HTTP Method   | Route          | Description                                                |
|---------------|----------------|------------------------------------------------------------|
| POST          | /ads           | AD creation                                              |
| GET           | /ads           | List all ads                                             |
| GET           | /ads/:id       | List a add using its ID as a parameter                    |
| PATCH         | /ads/:id       | Updates a ad's information using its ID as a parameter |
| DELETE        | /ads/:id       | Deletes a ad using its ID as a parameter                 |

---

<h4>AD Creation - POST</h4>

`/ads`

<h5>Request example -</h5>

```
POST /ads
Host: 
Authorization: Bearer Token
Content-type: application/json

```

<h5>Request body -</h5>

```json
{    
    "announcementType": "publicado",
    "title": "Black Car 2018",
    "year" : "2018"
    "km" : "200"
    "price": "200.000.00"
    "plate" : "XVD-123"
    "description": "I'm selling this 2018 black car...",
    "plate" : "Hi! I'm Gabe and i..."
    "vehicleType": "car",
    "published" : true
}
```

<h5>Response example -</h5>

```
201 Created
```

```json
{
    "id" : "xxxxxxx" (UUID),
    "announcementType": "publicado",
    "title": "Black Car 2018",
    "year" : "2018",
    "km" : "200",
    "price": "200.000.00",
    "plate" : "XVD-123",
    "description": "I'm selling this 2018 black car...",
    "plate" : "Hi! I'm Gabe and i...",
    "vehicleType": "car",
    "published" : true,
    "createdAt": "Y/D/M TIME",
    "isActive" : true
    
}
```

Possible Errors:
| Error code      | Description               |
|-----------------|---------------------------|
| 400 Bad Request | Plate already being used  |

---

<h4>List all ADS - GET</h4>

`/ads`

<h5>Request example -</h5>

```
GET /ads
Host: 
Authorization: Bearer Token
Content-type: application/json

```

<h5>Request body -</h5>

```
EMPTY

```

<h5>Response example -</h5>

```
200 OK
```

```json
[
  {
    "id" : "xxxxxxx" (UUID),
    "announcementType": "publicado",
    "title": "Black Car 2018",
    "year" : "2018",
    "km" : "200",
    "price": "200.000.00",
    "plate" : "XVD-123",
    "description": "I'm selling this 2018 black car...",
    "plate" : "Hi! I'm Gabe and i...",
    "vehicleType": "car",
    "published" : true,
    "createdAt": "Y/D/M TIME",
    "isActive" : true
    
  },
  {}
]
```

Possible Errors:
| Error code      | Description               |
|-----------------|---------------------------|
| 401 Unauthorized | Invalid token |

---

<h4> List AD by ID - GET</h4>

`/ads/:id`

<h5>Request example -</h5>

```
GET /ads/:id
Host: 
Authorization: Bearer Token
Content-type: application/json
```

<h5>Request body -</h5>

```
EMPTY
```

<h5>Response example -</h5>

```
200 OK
```

```json
[
    {
        "id" : "xxxxxxx" (UUID),
        "announcementType": "publicado",
        "title": "Black Car 2018",
        "year" : "2018",
        "km" : "200",
        "price": "200.000.00",
        "plate" : "XVD-123",
        "description": "I'm selling this 2018 black car...",
        "plate" : "Hi! I'm Gabe and i...",
        "vehicleType": "car",
        "published" : true,
        "createdAt": "Y/D/M TIME",
        "isActive" : true
    }
]
```

Possible Errors:
| Error code | Description |
|----------------|-----------|
| 401 Unauthorized | Invalid token  |
| 404 Not Found    | User not found |

---

<h4> Update AD by ID - PATCH</h4>

`/ads/:id`

<h5>Request example -</h5>

```
PATCH /ads/:id
Host: 
Authorization: Bearer Token
Content-type: application/json
```

<h5>Request body -</h5>
<p>Being able to update parcially or all ad's informations(except the ad's ID )</p>

```json
  { 
       "price": "150.000.00",
  }

```

<h5>Response example -</h5>

```
200 OK
```

```json
[
    {
        "id" : "xxxxxxx" (UUID),
        "announcementType": "publicado",
        "title": "Black Car 2018",
        "year" : "2018",
        "km" : "200",
        "price": "150.000.00",
        "plate" : "XVD-123",
        "description": "I'm selling this 2018 black car...",
        "plate" : "Hi! I'm Gabe and i...",
        "vehicleType": "car",
        "published" : true,
        "createdAt": "Y/D/M TIME",
        "isActive" : true
    }
]
```

Possible errors:
| Error code | Description |
|----------------|-----------|
| 401 Unauthorized | Invalid token |
| 401 Unauthorized | Can not change the ad's ID |
| 404 Not Found    | AD not found |

---

<h4>Delete AD by ID - DELETE</h4>

`/ads/:id`

<h5>Request example -</h5>

```
DELETE /ads/:id
Host: 
Authorization: Bearer Token
Content-type: application/json
```

<h5>Request body -</h5>

```
EMPTY
```

<h5>Response example -</h5>

``` 
204 No Content
```

Possible errors:
| Error code | Description |
|----------------|-----------|
| 401 Unauthorized | Invalid token |
| 404 Not Found    | AD not found |

---

## 3. **Comments**

| HTTP Method   | Route          | Description                                                |
|---------------|----------------|------------------------------------------------------------|
| POST          |            | Comment creation                                              |
| GET           | /users/:id     | List a comment using its ID as a parameter                    |
| PATCH         | /:id       | Updates a comment's information using its ID as a parameter |
| DELETE        | /:id       | Deletes a comment using its ID as a parameter                 |

---

<h4>Comment creation - POST</h4>

`/comment`

<h5>Request example -</h5>

```
POST /comment/
Host: 
Authorization: Bearer Token
Content-type: application/json

```

<h5>Request body -</h5>

```json
{    
    "description": "I really like the price but..",
    "tags" : "Cool"
}
```

<h5>Response example -</h5>

```
201 Created
```

```json
{
    "id" : "xxxxxxx" (UUID),
    "description": "I really like the price but..",
    "tags" : "Cool"
}
```

Possible Errors:
| Error code      | Description               |
|-----------------|---------------------------|
| 404 Not found |  User not found |
| 400 Bad request |  Missing description - "Make a comment" |


---

<h4> List Comment by ID - GET</h4>

`/comment/users/:id`

<h5>Request example -</h5>

```
GET /users/:id
Host: 
Authorization: Bearer Token
Content-type: application/json
```

<h5>Request body -</h5>

```
EMPTY
```

<h5>Response example -</h5>

```
200 OK
```

```json
[
    {
      "id" : "xxxxxxx" (UUID),
      "description": "I really like the price but..",
      "tags" : "Cool"
    }
]
```

Possible Errors:
| Error code | Description |
|----------------|-----------|
| 401 Unauthorized | Invalid token  |
| 404 Not Found    | Comment not found |

---

<h4> Update AD by ID - PATCH</h4>

`/comment/:id`

<h5>Request example -</h5>

```
PATCH /comment/:id
Host: 
Authorization: Bearer Token
Content-type: application/json
```

<h5>Request body -</h5>
<p>Being able to update parcially or all ad's informations(except the comment's ID )</p>

```json
  { 
      "description": "I really like the price now!",
  }

```

<h5>Response example -</h5>

```
200 OK
```

```json
[
   {
      "id" : "xxxxxxx" (UUID),
      "description": "I really like the price now!",
      "tags" : "Cool"
    }
]
```

Possible errors:
| Error code | Description |
|----------------|-----------|
| 401 Unauthorized | Invalid token |
| 401 Unauthorized | Can not change the comment's ID |
| 404 Not Found    | Comment not found |

---

<h4>Delete Comment by ID - DELETE</h4>

`/comment/:id`

<h5>Request example -</h5>

```
DELETE /comment/:id
Host: 
Authorization: Bearer Token
Content-type: application/json
```

<h5>Request body -</h5>

```
EMPTY
```

<h5>Response example -</h5>

``` 
204 No Content
```

Possible errors:
| Error code | Description |
|----------------|-----------|
| 401 Unauthorized | Invalid token |
| 404 Not Found    | Comment not found |

---



















[ Go back to the top of the page ](#main-tecnologies-and-frameworks)
