![](https://emojis.slackmojis.com/emojis/images/1542340471/4979/thinking.gif?1542340471) 
# **"Dude, chill..."**

## ![](https://emojis.slackmojis.com/emojis/images/1450319446/49/fireball.gif?1450319446)*The app to test your stress sensitivity*![](https://emojis.slackmojis.com/emojis/images/1450319446/49/fireball.gif?1450319446)

### :pushpion: What is this?
This is the server side of the "Dude, chill..." React Native app.

### :pushpin: Links
* Click [HERE](https://github.com/JetskevdWouden/dude_chill_native) for the client side repo of this app.
* Click [HERE](https://expo.io/@jetskevdwouden/dude_chill_) to :eyes: view && play the deployed "Dude, chill..." app on Expo.
* Click [HERE](https://evening-escarpment-40999.herokuapp.com) for the deployed server.

### Table of contents
* [Technologies used](#technologies-used)
* [Setup](#setup)
* [API](#api)

### Technology used
* Node.js
* PostgreSQL
* Express
* Sequelize

### Setup

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


