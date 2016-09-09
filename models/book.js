
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
  addBook(book){
      return this.addItem(book);
  }
  getBookNames(){
      return this.mapBy('name');
  }
}


               


module.exports = Book;