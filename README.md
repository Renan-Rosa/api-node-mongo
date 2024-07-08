<p align="center">
</p>

<h1 align="center">API -Node.js + MongoDB</h1>
<p align="center">A small CRUD api to study</p>

<h3 align="center">

  <!-- Version -->
  <a href="https://github.com/Renan-Rosa/api-node-mongo/releases">
    <img alt="releases url" src="https://img.shields.io/github/v/release/Renan-Rosa/api-node-mongo?style=for-the-badge&labelColor=1C1E26&color=FF79C6">
  </a>  
  
 <!-- License -->
  <a href="./LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/license%20-MIT-1C1E26?style=for-the-badge&labelColor=1C1E26&color=FF79C6">
  </a>
</h3>

<br />


## Setup | Installation

```sh
pnpm i
pnpm run dev

```
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
      <td>GET</td>
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