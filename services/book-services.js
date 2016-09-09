
const Book = require('../models/book.js');



class Book_Services /*extends Book*/ {
	constructor(subject, name){
                this.masBook = [];
                //super(subject, name);
	};
                createBook(subject, name){
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
//		//End repository

                getListOfBooks(){
                   return this.findAll();
                };		

};

module.exports = Book_Services;