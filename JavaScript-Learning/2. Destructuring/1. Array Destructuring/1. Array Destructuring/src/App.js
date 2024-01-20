function App() {

// First Example:------------------------------------------------------------//

/*
  In this example, we take an Array and destructure it. We take the first
  3 values out of that Array and store the values inside variables called
  a, b, and c!
*/

const alphabet = ["A", "B", "C", "D", "E", "F"];

const [a, b, c] = alphabet;

console.log(a); // A
console.log(b); // B
console.log(c); // C

// First Example:------------------------------------------------------------//


// Second Example------------------------------------------------------------//

/*
  In this example we do the same as above but we skip the second value inside 
  our array alphabet.
*/
const [d, , e] = alphabet;

console.log(d); // A
console.log(e); // C

// Second Example------------------------------------------------------------//


// Third Example------------------------------------------------------------//

/*
  In this example we extract the first and the second value from our alphabet
  Array. We also have a variable called rest containing all other values from 
  the array.
*/
const [f, g, ...rest] = alphabet;

console.log(f);    // A
console.log(g);    // B
console.log(rest); // C, D, E, F

// Third Example------------------------------------------------------------//


// Fourth Example------------------------------------------------------------//

/*
  In this example, we have two arrays: alphabet and numbers. We combine the 
  alphabet array with the numbers array into a single array.
*/
const numbers = [1,8,9,8,4,5,2]

const newArray = [...alphabet, ...numbers];
const newArray1 = alphabet.concat(numbers);

console.log(newArray);
console.log(newArray1);

// Fourth Example------------------------------------------------------------//

 
  return (
    <div>
    </div>
  );
}

export default App;