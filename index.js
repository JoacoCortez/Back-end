class user{
    constructor(name, lastname, books, pets){
        this.name = name;
        this.lastname = lastname;
        this.books = books;
        this.pets = pets;
    }
}

const joaquin = new user("Joaquin", "Cortez",[{name: "1984", autor: "George Orwell"}, {name: "Martín Fierro", autor: "José Hernández"}], ["gato", "perro"])

// console.log(joaquin)


function countPets(){

    return joaquin.pets.length

}

function addPet(){

    let newPet = ("mono");

    joaquin.pets.push(newPet)
}

function filtrate(element){

    return element.name +" de "+ element.autor

    
    
     
}

function getBooks(){
    

    
    let result = joaquin.books.map(filtrate)
    
    
    
    console.log(result)
    
    // const result = joaquin.books.filter(filtrate)
    // // return joaquin.books.name +" de "+ joaquin.books.autor
    // return result;
}

function addBook(){

    let newBook = {name: "Los tres mosqueteros", autor:"Alejandro Dumas"};
    
    joaquin.books.push(newBook)
}


function getFullname(){

    return joaquin.name +" "+ joaquin.lastname

}

countPets();

getBooks();

getFullname();

addPet();

addBook();


console.log(countPets())
console.log(getFullname())

