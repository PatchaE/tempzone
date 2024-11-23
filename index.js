var express = require('express')
var cors = require('cors')
const mysql = require('mysql2');

const port = 3000;

// ใช้ body-parser เพื่ออ่านข้อมูล JSON ที่ส่งมา
var app = express()
app.use(cors())
app.use(express.json())

// เชื่อมต่อฐานข้อมูล MySQL
const db = mysql.createConnection({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12746673',
    password: 'FRCKhTSXSM',
    database: 'sql12746673'
});
app.post('/api/data', function (req, res, next) {
    // connection.query(
    //   'INSERT INTO `users`(`fname`, `lname`, `username`, `password`, `avatar`) VALUES (?, ?, ?, ?, ?)',
    //   [req.body.fname, req.body.lname, req.body.username, req.body.password, req.body.avatar],
    //   function(err, results) {
    //     res.json(results);
    //   }
    // );
    console.log(req.body);
  });
db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to database');
});

// เริ่มต้นเซิร์ฟเวอร์
app.listen(port, () => {
    console.log("Server running on");
});