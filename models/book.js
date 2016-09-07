
class Book {
  constructor(subject, name) {
    this.setSubject(subject);
    this.setName(name);
  }
  setName(name){
    this.name = name
    return this;
  }
  getName() {
    return this.name;
  }
  setSubject(subject) {
    this.subject = subject;
    return this;
  }
  getSubject(){
    return this.subject;
  }
}



// var English = new Book('Family and Friends', '3');
// var History = new Book('Ancient history', '6');
// var Biology = new Book('Biology', '5');
// var Geograpgy = new Book('Geograpgy', '5');
//module.exports = Book;

               //Start repository
		
//		findAll(){};
//		findById(id){};
//		findBy(field,value){};
//		removeById(id){};
//		create(Builder){};
//		
//		//End repository
//		
//		addBook(){};
//		


module.exports = Book;