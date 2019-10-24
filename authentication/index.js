require("dotenv").config();
const express = require("express")
const massive = require("massive");
const session = require("express-session");
const bcrypt = require("bcrypt");

const app = express();

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set("db", dbInstance);
    console.log("Database Connected!");
})

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'super secret',
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}))

app.use(express.json());

app.post("/auth/register", async (req, res) => {
    const {username, password, email, phoneNumber} = req.body
    const db = req.app.get("db");
    const response = await db.checkForTakenUsername(username);
    console.log(response);
});

app.listen(5051, () => console.log("Listening on Port 5051"));