const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();
const port = 3000;


app.use(bodyParser.json());

const users = [ 
    { email: "user17@example.com", password: "password1217" },
  { email: "user18@example.com", password: "password1218" },
  { email: "user19@example.com", password: "password1219" },
  { email: "user20@example.com", password: "password1220" }
];

app.post('/login', (req, res) => {
  const email = req.query.email;
  const password = req.query.password;

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
