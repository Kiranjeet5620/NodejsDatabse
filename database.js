const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./college.db', (err) => {
  if (err) {
    return console.error(err.message)
  }
  console.log('Connected to the database.')
})
db.run('CREATE TABLE students (studentid VARCHAR(20) NOT NULL,studentname VARCHAR(20) NOT NULL,programgroup VARCHAR(20));', function (err) {
  if (err) {
    return console.log(err.message)
  }
  console.log('students Table created')
})
db.run('CREATE TABLE classes (classid VARCHAR(20),classname VARCHAR(20),room VARCHAR(20),datesession VARCHAR(20));', function (err) {
  if (err) {
    return console.log(err.message)
  }
  console.log('classes Table created')
})
db.run('CREATE TABLE enrollment (enrollmentid VARCHAR(20),studentid VARCHAR(20),classid VARCHAR(20));', function (err) {
  if (err) {
    return console.log(err.message)
  }
  console.log('enrollment Table created')
})
db.run('insert into students (studentid, studentname, programgroup) values (741277,Kiran,CSAT);', function (err) {
  if (err) {
    return console.log(err.message)
  }
  console.log('student inserted')
})
db.run('insert into classes (classid, classname, room, datesession) values (CSD3314_4,WebTech,B230,THU-AM);', function (err) {
  if (err) {
    return console.log(err.message)
  }
  console.log('class inserted')
})

db.run('insert into enrollment (enrollmentid, studentid, classid) values (1233,741277,CSD3314_4);', function (err) {
  if (err) {
    return console.log(err.message)
  }
  console.log('enrollment enterred')
})
db.close()
