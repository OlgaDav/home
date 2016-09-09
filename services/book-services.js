
const Book = require('../models/book.js');



class Book_Services /*extends Book*/ {
	constructor(/*subject, name*/){
                this.masBook = [];
                
                //super(subject, name);
	};
	
        greateBook(subject, name){
            this.masBook.push(new Book (subject, name));
        };
        
        //Start repository
		
		findAll(){
                    return this.masBook;
                };
                
                
//		findById(id){};
//		findBy(field,value){};
		removeById(id){
                    return this.masBook.splice(id-1, 1);
                };
//		create(Builder){};
//		
//		//End repository
//		
//		addBook(){};
//		getAllBookList(){};
//        getListOfGivenBooks(){};
//		getListOfStudentWithBooks(){};
//        getBookListForLevelOne(){};
//		getBookListForLevelTwo(){};
//		getBookListForLevelThree(){};
//		getBookListForLevelFour(){};
//		getBookListForLevelFive(){};
//		getBookListForLevelSix(){};
//		getBookListForLevelSeven(){};
//		getBookListForLevelEight(){};
//		getBookListForLevelNine(){};
//		getBookListForLevelTen(){};
//		getBookListForLevelEleven(){};




};

module.exports = Book_Services;