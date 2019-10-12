const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./college.db', (err) => {
  if (err) {
    return console.error(err.message)
  }
  console.log('Connected to the database.')
})

db.each("Select enrollment.student_id,studentname,programgroup, classname, room, datesession from students,classes,enrollment where enrollment.class_id='CSD3314_4'", (err, row) => {
  if (err) {
    throw err
  }
  console.log(row.student_id, row.studentname, row.programgroup, row.classname, row.room, row.datesession)
})

db.close()
