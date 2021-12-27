// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// const password = "abcd1234";
// const hashed = bcrypt.hash(password, 10);

// hashed.then(console.log);

// const result = bcrypt.compare("abcd1234", await hashed);

// result.then(console.log);

// const token = jwt.sign(
//   {
//     id: "userID",
//     cookie: "cookie",
//   },
//   "sdfasdfasdf"
// );

export let loggedUser = { id: null, cookie: null };
