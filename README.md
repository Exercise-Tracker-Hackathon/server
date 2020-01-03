# server

baseURL: https://pumpodoro.herokuapp.com

register/log in: `/api/auth/register`, `/api/auth/login`

get user by id: `/api/users/:id`

post a new exercise: `/api/exercises`
token required to determine user id
body required:

```
{
	"type": "Push Ups",
	"reps": "20"
}
```

post a new set: `/api/sets`
body required:

```
{
	"exercise_id": 1
}
```
