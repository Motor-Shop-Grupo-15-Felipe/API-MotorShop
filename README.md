# MotorShop

<h2>API documentation</h2

## MAIN TECNOLOGIES AND FRAMEWORKS:

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
  <li>GET - /adds</li>
  <li>GET - /adds/:id</li>
  <li>PATCH - /ads/:id</li>
  <li>DELETE - /adds/:id</li>
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
<summary>IMAGES</summary>
  <ul>
  <li>POST - /</li>
  <li>GET - /</li>
  <li>GET - //:id</li>
  <li>PATCH - //:id</li>
  <li>DELETE - //:id</li>
  </ul>
</details>

[ Go back to the top of the page ](#MAIN-TECNOLOGIES-AND-FRAMEWORKS)
