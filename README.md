![](https://emojis.slackmojis.com/emojis/images/1542340471/4979/thinking.gif?1542340471) 
# **"Dude, chill..."**

## ![](https://emojis.slackmojis.com/emojis/images/1450319446/49/fireball.gif?1450319446)*The app to test your stress sensitivity*![](https://emojis.slackmojis.com/emojis/images/1450319446/49/fireball.gif?1450319446)

### :pushpin: What is this?
This is the server side of the "Dude, chill..." React Native app.

### :pushpin: Links
* Click [HERE](https://github.com/JetskevdWouden/dude_chill_native) for the client side repo of this app.
* Click [HERE](https://expo.io/@jetskevdwouden/dude_chill_) to :eyes: view && play the deployed "Dude, chill..." app on Expo.
* Click [HERE](https://evening-escarpment-40999.herokuapp.com) for the deployed server.

### :pushpin: Table of contents
* [Technologies used](#technologies-used)
* [Setup](#setup)
* [API](#api)
* [Future Features](#future-features)

### :pushpin: Technology used
* Node.js
* PostgreSQL
* Express
* Sequelize

### :pushpin: Setup

1. git clone
2. npm install
3. npm run dev

Please note that in order to run the server locally you must also start a Postgres container
using the following commands
```bash
$ docker run \
  --rm \
  -e POSTGRES_PASSWORD=secret \
  -p 5432:5432 \
  postgres
```
Connect to your database with:
* Mac: Postico
* Linux: DBeaver

### :pushpin: API
**Models:**

* content
* user
* game

**Endpoints:**

*`<base url>` is either http://localhost:4000 for local development or https://evening-escarpment-40999.herokuapp.com for the deployed backend.*

* `GET <base url>/content`
Fetches 8 random GIFs URL links from database.

* `POST <base url>/sign-up` 
Creates a new user in the database.

* `GET <base url>/all-users`
Fetches all users in the database.

* `GET <base url>/users/:id`
Fetches user by id.

* `PUT <base url>/users/:id/stress`
Updates user's stress column.

* `DELETE <base url>/users/:id`
Destroys user from database by id.

### Future Features



