const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./Routes/authRoutes');

const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://127.0.0.1:5500',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

app.listen(port, ()=>{
  console.log(`Server đang chạy tại http://localhost:${port}`);
});


// const sequelize = require('./Config/database');

// sequelize.authenticate()
//   .then(() => {
//     console.log('Kết nối MySQL thành công!');
//   })
//   .catch(err => {
//     console.error('Lỗi kết nối MySQL:', err);
//   });


// app.use(cors());
// app.get('/api/message', (req, res) => {
//     res.json({ message: 'Hello from the server!' });
// });
// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });

// app.post('/api/register', (req, res) => {
//     const {firstname, lastname, email, password} = req.body;
//     // Here you would typically save the user to a database
//     res.json({ message: 'User registered successfully', user: { firstname, lastname, email } });


// });