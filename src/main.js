// Create variables targetting the relevant DOM elements here 👇
// DOM allows us to interact with HTMLK elements via js

/*

We've provided a few variables below

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

- We have 4 args
      - Image arg
      - Title arg
      - descriptor1 arg
      - descriptor2 arg

// descriptor literal thought
`A tale of ${descriptor1} and ${descriptor2}`;

// Hint for document.querySelector(<argument>)
var currentCover;

// Function note & Idea

math.floor(Math.random() * arrat.length
 - 3 math.floor fxns
      1 for Covers
      1 for titles
      1 for taglines (will integrate descriptor1 and descriptor2 into a string literal)



*/

class Romcom {
  constructor(cover, title, tagline){
    this.cover = cover;
    this.title = title;
    this.tagline = tagline
  } // end of constructor
  
//Fxn 1



//Fxn 2



//Fxn 3




}  // end of class



// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
