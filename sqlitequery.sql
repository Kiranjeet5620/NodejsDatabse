-- SQLite


PRAGMA foreign_keys = ON;

PRAGMA foreign_keys;

Select enrollment.studentid,studentname,programgroup, classname, room, datesession
FROM enrollment
INNER JOIN students
ON enrollment.studentid = students.studentid
 INNER JOIN classes
 ON enrollment.classid=classes.classid;