// extract the last four characters from the string
let a= 'extravaganza'

console.log({character:a[8]});
console.log({character:a[9]});
console.log({character:a[10]});
console.log({character:a[11]})

// insert string 'eat' at the fourth index
const food="The quick fox jumped over the lazy dog";
const insert = "eat";
const secfood = food.substring (0,4) + insert + food.substring(4);

console.log(secfood);

// count how many times the following strings appear
// 'the'
const count = "The quick fox jumped over the lazy dog"
const count1 =(count.match(/the/gi)|| [].length);
// 'brown'
const count2 =(count.match(/brown/gi)|| [].length);

console.log("Number of occurences of 'the':" , count1);
console.log("Number of occurences of 'brown':" , count2 );

// Find words from this strings
// are
const string1 = "The pupils are reading in the library";
console.log({index:string1.indexOf("are")});

// sitting
const string2 = "The child was sitting on the table before it fell";
console.log({index:string2.indexOf("sitting")});

// convert to uppercase & lowercase
let b = "wonderful"
let c = "amazing"

console.log(b.toUpperCase());
console.log(c.toLowerCase());