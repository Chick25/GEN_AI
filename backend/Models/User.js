const connection = require('../Config/database');

const User = {
    create: (firstname, lastname, email, password, callback) => {
        const query = 'INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)';
        connection.query(query, [firstname, lastname, email, password], callback);
    },
    findByEmail: (email, callback) => {
        const query = 'SELECT * FROM users WHERE email = ?';
        connection.query(query, [email], callback);
    },
};

module.exports = User;