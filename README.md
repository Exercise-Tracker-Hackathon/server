# Pumpodoro API Documentation

Pumpodoro is a web application where productivity and activity meet. Pumpodoro users are reminded to take a step away from their desk at timed intervals to do high intensity exercises throughout the day.

Back-end is deployed at: https://pumpodoro.netlify.com

Front-end documentation can be found at: https://github.com/Exercise-Tracker-Hackathon/client

The main application is deployed at: https://pumpodoro.netlify.com

# Endpoints

baseURL: https://pumpodoro.herokuapp.com/api

### Authentication

<details>
<summary><b>POST - Register a new user</b></summary>

<b>Endpoint:</b> `/auth/register`
</br>
Requires an object with an email, password and username:

```json
{
  "email": "admin@email.com",
  "password": "password"
}
```

When successful will return status code of 201 (CREATED), the new user object and a token.

</details>

<details>
<summary><b>POST - Login an existing user</b></summary>

<b>Endpoint:</b> `/auth/login`
</br>
Requires an object with an email, password and username:

```json
{
  "email": "admin@email.com",
  "password": "password"
}
```

When successful will return status code of 200 (OK), the user object and a token.

</details>

### User Endpoints

<details>
<summary><b>GET - Get User By Id</b></summary>

<b>Endpoint:</b> `/users/:id`
</br>

When successful will return status code of 200 (OK), the user object with an array of their exercises.

</details>

### Exercises

<details>
<summary><b>POST - Post a new exercise</b></summary>

<b>Endpoint:</b> `/exercises`
</br>
Token required to determine user id.
Body required:

```
{
	"type": "Push Ups",
	"reps": "20"
}
```

When successful will return status code of 201 (CREATED) and the newly created exercise object.

</details>

### Sets

<details>
<summary><b>POST - Add a new set</b></summary>

<b>Endpoint:</b> `/sets`
</br>
Body required:

```
{
	"exercise_id": 1
}
```

When successful will return status code of 201 (CREATED) and the newly created set object.

</details>
