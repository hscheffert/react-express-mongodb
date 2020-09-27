CREATE TABLE
IF NOT EXISTS sys.`users`
(
  id int
(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  firstName varchar
(50) NOT NULL,
  lastName varchar
(50) NOT NULL,
  email varchar
(255) NOT NULL,
  isActive BOOLEAN DEFAULT false
);

insert into sys.users
values
  (1, 'User', 'One', 'userone@test.com', true);

insert into sys.users
values
  (2, 'User-2', 'Two', 'usertwo@test.com', true);