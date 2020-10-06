function addFavoriteBook(bookName) {
    if (bookName.includes("Great") == false) {
        favoriteBooks.push(bookName);
    }
}

function printFavoriteBooks() {
    console.log(`Favorite Books: ${favoriteBooks.length}`);
    for (let i = 0; i < favoriteBooks.length; i++) {
        console.log(favoriteBooks[i]);

    }
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

printFavoriteBooks();


// Falsy values -->   "", 0, -0, null , NaN, false, undefined
// Truthy values -->  everything else other than Falsy values

/*
 
Coercion Best Practices

Useful vs Dangerous?
 
- Useful is when the reader is focused on what's important
- Dangerous is when the reader can't tell what will happen

- If the reader understands the code better than before, than THAT CODE IS BETTER.



Checking Equality [ == vs ===]

 == allows coercion (types different)
 === disallows coercion (types same)

 WHEN THE TYPES ARE THE SAME, THE DOUBLE EQUAL & TRIPLE EQUAL PREFORM THE SAME FUNCTION
 



 == is about comparisons with known type(s), optionally where conversions are helpful

 

*/