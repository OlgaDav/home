//const StudentGroup = require('../models/studentgroup.js');
//const Subject = require('../models/subject.js');
//const Book = require('../models/book.js');
//const Position = require('../models/position.js');
//const Teacher = require('../models/teacher.js');
//const Parent = require('../models/parents.js');
//const Student = require('../models/student.js');
//const TeacherRole = require('../models/teachersrole.js');
const Book_Services = require('../services/Book-Services.js');

//Здесь создаем объект на сервис, для раоты с книгами.
const library = new Book_Services ();

//Создаем кники
library.createBook('History', 'Ancient history 6 level');

console.log(library.findAll());
console.log("=============================================");
library.removeById(1);
console.log(library.findAll());

console.log("=============================================");
library.createBook('Geography', 'Geography 6 level');
console.log(library.findAll());
console.log("=============================================");
console.log(library.getListOfBooks());