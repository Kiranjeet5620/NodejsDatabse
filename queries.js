const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./college.db', (err) => {
  if (err) {
    return console.error(err.message)
  }
  console.log('Connected to the database.')
})
db.each("Select enrollment.studentid,studentname,programgroup, classname, room, datesession from students,classes,enrollment where enrollment.classid='CSD3314_4'", (err, row) => {
  if (err) {
    throw err
  }
  console.log(row.studentid, row.studentname, row.programgroup, row.classname, row.room, row.datesession)
})
db.close()
