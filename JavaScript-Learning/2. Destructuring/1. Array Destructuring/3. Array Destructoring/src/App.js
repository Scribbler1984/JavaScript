import './App.css';

/*

  Die map()-Funktion
  ----------------------------------------------------------------------------------------------------------------------------------------

  Array destructuring is a feature in JavaScript that allows you to extract values from an 
  array and assign them to variables in a more concise and readable way.

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

function App() {
//----------------------------------------------------------------------------------------------------------------------------------------//

  let employee = ["Chandler", "Bing", "Male"];

  const [firstName, lastName, gender, age] = employee;

  console.log(firstName); //   Chandler    //
  console.log(lastName);  //   Bing        //
  console.log(gender);    //   Male        //
  console.log(age);       //   Undefined   //

//----------------------------------------------------------------------------------------------------------------------------------------//

  const [firstName1, age1 = 23, ...rest] = employee

  console.log(firstName1); //  Chandler  //
  console.log(rest);       //  Male      //
  console.log(age1);       //  Bing      //

//----------------------------------------------------------------------------------------------------------------------------------------//

  return (
    <div className="App">
    
    </div>
  );
  
}

export default App;