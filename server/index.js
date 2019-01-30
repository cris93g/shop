require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const session = require("express-session");
const app = express();
const port = process.env.port || 3001;
routes = require("./routes/routes");
const passport = require("passport");
const { getUser, strat, logout } = require(`${__dirname}/controllers/authCtrl`);

routes(app);

app.use(json());
app.use(cors());

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 7 * 24 * 60 * 1000
		}
	})
);

massive(process.env.CONNECTION_STRING)
	.then(dbInstance => {
		app.set("db", dbInstance);
		console.log("connected");
	})
	.catch(err => {
		console.log(err);
	});

app.use(passport.initialize());
app.use(passport.session());
passport.use(strat);

passport.serializeUser((user, done) => {
	// console.log("user", user);
	const db = app.get("db");
	db.getUserByAuthid([user.id])
		.then(response => {
			if (!response[0]) {
				db.addUserByAuthid([user.displayName, user.name, user.id, user.picture])
					.then(res => done(null, res[0]))
					.catch(console.log);
			} else return done(null, response[0]);
		})
		.catch(console.log);
});

passport.deserializeUser((user, done) => done(null, user));

app.get("/me", getUser);

app.get(
	"/login",
	passport.authenticate("auth0", {
		// successRedirect: "/",
		successRedirect: "http://localhost:3000/#/",
		// successRedirect: "/#/",
		failureRedirect: "/login"
	})
);

app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
});
