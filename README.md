<p align="center">
</p>

<h1 align="center">API -Node.js + MongoDB 🍃</h1>
<h2 align="center">A API with Node.js + MongoDB, CRUD and to Study</h2>

<br />


## Setup | Installation

```sh
pnpm i
pnpm run dev

```
## Technologies

- Node.js
- MongoDB Atlas (Mongoose)
- Fastify
- Rest Client (Client HTTP)

## Functionalities

<table>
  <thead>
    <tr>
      <th>Title</th>
      <th>Description</th>
      <th>Route</th>
      <th>Method</th>
      <th>Functional</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Create a fruit</td>
      <td>Just creat a Fruit</td>
      <td>/api/fruit</td>
      <td>POST</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>List fruits</td>
      <td>List all the fruits after created</td>
      <td>/api/fruit</td>
      <td>GET</td>
      <td>✅</td>
    </tr>
      <tr>
      <td>Find a fruit by ID</td>
      <td>Just creat a Fruit</td>
      <td>/api/fruit/:id</td>
      <td>GET</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Update a fruit by ID</td>
      <td>Update a fruit searching by ID</td>
      <td>/api/fruit/:id</td>
      <td>PUT</td>
      <td>✅</td>
    </tr>
      <tr>
      <td>Delete a fruit by ID</td>
      <td>Delete a fruit searching by ID</td>
      <td>/api/fruit/:id</td>
      <td>DELETE</td>
      <td>✅</td>
    </tr>
  </tbody>
</table>

### Important 

- If you don't want to install some Http Client, not problem you can access the file 

~~~bash

client.http

~~~

- In the root directory to send requests