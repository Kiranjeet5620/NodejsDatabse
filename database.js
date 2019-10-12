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
db.run("insert into students (studentid, studentname, programgroup) values (741277,'Kiran','CSAT'),(744678,'Aman','CSAT'),(743540,'Sonia','CSAT');", function (err) {
  if (err) {
    return console.log(err.message)
  }
  console.log('student inserted')
})
db.run("insert into classes (classid, classname, room, datesession) values ('CSD3314_4','WebTech','B230','THU-AM'),('CSD1234_4','JAVA','B123','FRI-AM');", function (err) {
  if (err) {
    return console.log(err.message)
  }
  console.log('class inserted')
})

db.run("insert into enrollment (enrollmentid, studentid, classid) values (1233,741277,'CSD3314_4'),(1234,744678,'CSD3314_4'),(1235,743540,'CSD3314_4');", function (err) {
  if (err) {
    return console.log(err.message)
  }
  console.log('enrolled')
})

db.each("Select enrollment.studentid,studentname,programgroup, classname, room, datesession from students,classes,enrollment where enrollment.classid='CSD3314_4'", (err, row) => {
  if (err) {
    throw err
  }
  console.log(row.studentid, row.studentname, row.programgroup, row.classname, row.room, row.datesession)
})

db.close()
