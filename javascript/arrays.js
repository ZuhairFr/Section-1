const movies = ['Spiderman', 'Avengers', 'Conjuring', 'Obsession', 'Tenet', 'Taken'];

console.log(Array.isArray(movies));

console.log(movies.length);

console.log(movies[2]);
console.log(movies.indexOf('Knives Out'));

console.log(movies.at(-3));

movies[2] = 'Annabelle';

console.log(movies);

// sclicing

console.log(movies.slice(2,5));


console.log(movies.slice(3,6));
