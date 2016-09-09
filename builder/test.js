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
const bService = new Book_Services ();
//Создаем кники
bService.greateBook('Algebra', 'levelOne');
bService.greateBook('English', 'levelThree2');
bService.greateBook('English2', 'levelThree3');
bService.greateBook('English3', 'levelThree4');
bService.greateBook('English4', 'levelThree5');



console.log(bService.findAll());
console.log("=============================================");
bService.removeById(3);
console.log(bService.findAll());

