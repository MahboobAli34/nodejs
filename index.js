const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();
const port = 3000;


app.use(bodyParser.json());

const users = [
  { email: "user1@example.com", password: "password121" },
  { email: "user2@example.com", password: "password122" },
  { email: "user3@example.com", password: "password123" },
  { email: "user4@example.com", password: "password124" },
  { email: "user5@example.com", password: "password125" },
  { email: "user6@example.com", password: "password126" },
  { email: "user7@example.com", password: "password127" },
  { email: "user8@example.com", password: "password128" },
  { email: "user9@example.com", password: "password129" },
  { email: "user10@example.com", password: "password1210" },
  { email: "user11@example.com", password: "password1211" },
  { email: "user12@example.com", password: "password1212" },
  { email: "user13@example.com", password: "password1213" },
  { email: "user14@example.com", password: "password1214" },
  { email: "user15@example.com", password: "password1215" },
  { email: "user16@example.com", password: "password1216" },
  { email: "user17@example.com", password: "password1217" },
  { email: "user18@example.com", password: "password1218" },
  { email: "user19@example.com", password: "password1219" },
  { email: "user20@example.com", password: "password1220" }
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  for (let i = 0; i < users.length; i++) {
    
    if (email === users[i].email && password === users[i].password) {
      return res.status(200).json({
        message: "Login successful",
        token: "abcccc"
      });
    }
  }

  
  return res.status(401).json({
    message: "Invalid username or password"
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
