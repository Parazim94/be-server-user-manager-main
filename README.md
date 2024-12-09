# Simple user manager API

Create an API to manage users with endpoints for listing, creating, updating and deleting users.

## Tasks

### Task 1

- Install `express` as a dependency
- Edit the `server.js` file so that the server will listen on port `5000`

### Task 2

- Create an array of users
- Initialize the array with some data, for example;

```js
const users = [
  {
    id: 1,
    name: "Jane Austen",
    status: "I find myself in tolerable health and spirits.",
  },
];
```

### Task 3

- Create a GET `/user` endpoint that returns the entire array of users

```json
// Output for GET /user
[
  {
    "id": 1,
    "name": "Jane Austen",
    "status": "I find myself in tolerable health and spirits."
  }
]
```

### Task 4

- Create a GET `/user/:id` endpoint that returns a single user with the given ID

> **Hint**: You will need to use the `param` property here to capture the dynamic value of `id`

```json
// Output for GET /user/1
{
  "id": 1,
  "name": "Jane Austen",
  "status": "I find myself in tolerable health and spirits."
}
```

### Task 5

- Create a POST `/user` endpoint that adds a new user into the array. The information for the new user should come from the request body
- Calculate a new ID for the user

**Input**

```json
// POST /user
{
  "name": "Daria Morgendorffer",
  "status": "I'm a selectively caring individual."
}
```

**Output**

```json
{
  "id": 2,
  "name": "Daria Morgendorffer",
  "status": "I'm a selectively caring individual."
}
```

### Task 6

- Create a PATCH `/user/:id` endpoint that updates a single user with the given ID
- It should update a user based on the `id` parameter, with the new information coming from the request body

**Input**

```json
// PATCH /user/2
{
  "status": "I'm not antisocial. I just don't like people."
}
```

**Output**

```json
{
  "id": 2,
  "name": "Daria Morgendorffer",
  "status": "I'm not antisocial. I just don't like people."
}
```

## Bonus tasks

- Make sure the PATCH endpoint _only_ allows editing of the status
- Add an endpoint to delete users too
- Instead of storing users in-memory use a file OR a database!
