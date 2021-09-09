const faker = require("faker");
const fs = require("fs");
const generateUsers = (number) => {
  const users = [];
  while (number >= 0) {
    users.push({
      id: number,
      name: faker.name.firstName(),
      email: faker.internet.email().toLowerCase(),
      created_at: faker.date.recent(10),
    });
    number--;
  }
  return users;
};
fs.writeFileSync("./db.json", JSON.stringify({ myapi: generateUsers(17) }));
