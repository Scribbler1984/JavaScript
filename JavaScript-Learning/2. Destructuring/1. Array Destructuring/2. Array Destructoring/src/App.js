import './App.css';

function App() {


  /*

  Array Destructoring
  ----------------------------------------------------------------------------------------------------------------------------------------

  Array destructuring is a feature in JavaScript that allows you to extract values from an 
  array and assign them to variables in a more concise and readable way.

  Using array destructuring, you can extract specific elements from these arrays in various ways:

  const a = alphabet[0]: Assigns the first element of the alphabet array to the variable a.
  const b = alphabet[1]: Assigns the second element of the alphabet array to the variable b.
  const [a, b] = alphabet: Destructures the alphabet array, assigning its first element to a and the second element to b.
  const [a, , c] = alphabet: Destructures the alphabet array, assigning its first element to a, skipping the second element, and assigning the third element to c.
  const [a, ...rest] = alphabet: Destructures the alphabet array, assigning its first element to a and the rest of the elements to the array rest.
  const newArray = [...alphabet, ...numbers]: Creates a new array by combining the elements of alphabet and numbers using the spread operator (...).
  const newArray = alphabet.concat(numbers): Creates a new array by concatenating the alphabet and numbers arrays.
  const [a, b, c, d, e, f, g='G'] = alphabet: Destructures the alphabet array, assigning its elements to variables a through g, with a default value of 'G' for the variable g.

  ----------------------------------------------------------------------------------------------------------------------------------------
  
  */


  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
  const numbers = ['1', '2', '3', '4', '5', '6']

  // const a = alphabet[0]                       // A
  // const b = alphabet[1]                       // B
  // const [a,b] = alphabet                      // A, B
  // const [a,,c] = alphabet                     // A,, C
  // const [a, ...rest] = alphabet               // A, B C D E F
  // const newArray = [...alphabet, ...numbers]  // A B C D E F 1 2 3 4 5 6 
  // const newArray = alphabet.concat(numbers)   // A B C D E F 1 2 3 4 5 6
  // const [a,b,c,d,e,f,g='G'] = alphabet        // A B C D E F G


  return (
    <div>
      
    </div>
  );
}

export default App;
