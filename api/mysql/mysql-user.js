const db = require('./database.js');

class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.isActive = true;
  }
}

User.create = (user, result) => {
  console.log('user: Create user', req.email);

  db.query(`insert into users values (${user.firstName}, ${user.lastName}, ${user.email}, ${user.isActive})`, (error, qResult) => {
    if (error) {
      console.error(error);
      result(error, null);
      return;
    }

    console.log('Created user with id', qResult.insertId);
    result(null, {
      id: qResult.insertId,
      ...user,
    });
  });
}

User.getAll = result => {
  db.query("SELECT * FROM users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Users: ", res);
    result(null, res);
  });
};

module.exports = User;