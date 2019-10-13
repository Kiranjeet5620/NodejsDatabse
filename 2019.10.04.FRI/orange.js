const sqlite3 = require('sqlite3').verbose();
let db= new sqlite3.Database('/user.db')
db.run('CREATE TABLE users(id INTEGER ))