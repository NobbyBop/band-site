import bcrypt from "bcrypt";

const password = "password";
const username = "username";

const hashedUsername = await bcrypt.hash(username, 10);
const hashedPassword = await bcrypt.hash(password, 10);

console.log("Hashed username: ", hashedUsername);
console.log("Hashes password: ", hashedPassword);
