const movies = ['Spiderman', 'Avengers', 'Conjuring', 'Obsession', 'Tenet', 'Dunkirk'];

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


// adding and removing elemennt in the array 

movies.push('Dr.strange');
movies.unshift('HellBoy')
console.log(movies);

movies.pop();
movies.shift();
console.log(movies);

// splice 

// movies.splice(1,2,'Smurf', 'Godfather'); //replacing elements
movies.splice(1,0,'Fight Club','Mortal Combat')
console.log(movies);


