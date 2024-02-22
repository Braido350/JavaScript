(function(){
/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
var person = {
    name: 'Paulo',
    lastname: 'Gabriel',
    age: 22 
}
console.log( 'Propriedades de "person": ');

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log(Object.keys(person));

/*
Crie um array vazio chamado `books`.
*/
var books = []

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
var book1 = {
    name: "The Great Gatsby",
    pages: 180
};

var book2 = {
    name: "To Kill a Mockingbird",
    pages: 324
};

var book3 = {
    name: "1984",
    pages: 328
};

books.push(book1);
books.push(book2);
books.push(book3);
console.log( '\nLista de livros:' );

/*
Mostre no console todos os livros.
*/
books.forEach(function(book){
    console.log('Name: ' +book.name + ', Pages: '+book.pages);
})

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
var removedBook = books.pop()
console.log('Name: ' + removedBook.name + ', Pages: ' + removedBook.pages);

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
books.forEach(function(book){
    console.log('Name: ' +book.name + ', Pages: '+book.pages);
})

/*
Converta os objetos que ficaram em `books` para strings.
*/
var booksString = JSON.stringify(books)
console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/
console.log(booksString)

/*
Converta os livros novamente para objeto.
*/
var booksParse = JSON.parse(booksString)
console.log( '\nAgora os livros são objetos novamente:' );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
books.forEach(function(books){
    for(var prop in books){
        console.log(prop +': ' + books[prop])
    }
    console.log('')
})

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ['P', 'a', 'u', 'l', 'o']
console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log(myName.join(''));

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log(myName.reverse().join(''));

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log(myName.slice().sort().join(''))


}());