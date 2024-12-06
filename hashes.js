import bcrypt from "bcrypt";

const password = "m88or4g2a3n9537";
const username = "captain2021";

const hashedUsername = await bcrypt.hash(username, 10);
const hashedPassword = await bcrypt.hash(password, 10);

console.log("Hashed username: ", hashedUsername);
console.log("Hashes password: ", hashedPassword);
