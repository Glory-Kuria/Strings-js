let arr1 = [3,7,34,90,12]
console.log( arr1.slice(-1));

let arr2 = [true, "green", "where",12,56]
console.log( arr2.slice (-1));



//join the following array elements into a string

let myPets = ["Cow", "Bird", "Snake", "Dog"];
let joinPets = myPets.join();
console.log({joinPets});


//sort the following array items

var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

console.log(arr3.sort(function(a, b){return a - b}));

//remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates

let arr = ["boy", "man", "girl",            "school", "girl", "woman"];
 function removeDuplicates(arr) {
   return arr.filter((item,
         index) => arr.indexOf(item) === index);
 }
 console.log(removeDuplicates(arr));

//search for the following word in the array."food"If the word is present, return it else return "the search word was not found"

let arr5 = ["shelter", "clothing", "food", "education"];
let i = arr5.includes("food");
if(i==true){
    console.log("food")
}
else{
console.log("the search word was not found")
}

//sort the following string:

let word = "renniw";
let sortedString = word.sort()
console.log( sortedString);