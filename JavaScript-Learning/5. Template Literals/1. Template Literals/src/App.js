import './App.css';

/*

Template Literals
----------------------------------------------------------------------------------------------------------------------------------------
In JavaScript, template literals are a way to represent strings that allows for easy embedding of 
expressions and variables. They were introduced in ECMAScript 6 (ES6) to provide a more concise and 
readable syntax for string interpolation.

Template literals are enclosed by backticks ( ) instead of single or double quotes. Here's a basic example:

javascript

let name = "John";
let greeting = `Hello, ${name}!`;
console.log(greeting);

In this example, the ${name} within the backticks is a placeholder for the value of the name variable. 
When the template literal is evaluated, the variable's value is inserted into the string. The resulting 
string stored in the greeting variable will be "Hello, John!".

Template literals support multiline strings as well. Traditional strings would require explicit line 
breaks (using \n), but with template literals, you can include line breaks directly:

javascript

let multilineString = `
  This is a multiline string.
  It spans multiple lines.
  Isn't it convenient?
`;

console.log(multilineString);

Template literals also support expressions and functions:

javascript

let a = 5;
let b = 10;

console.log(`The sum of ${a} and ${b} is ${a + b}.`);

// Using functions
function capitalize(text) {
  return text.toUpperCase();
}

let message = `Hello, ${capitalize(name)}!`;
console.log(message);

In the above example, expressions within ${} are evaluated, and their results are embedded into the string.

Template literals offer a more readable and flexible way to create strings, especially when dealing 
with dynamic content or multiline text.

----------------------------------------------------------------------------------------------------------------------------------------

*/

function App() {

  const message1 = "This is my\n" +
                  '\'first\' message';

  const message2 = `Hi ${message1},
                    
                    thank you for your message.
                    We will see us tomorrow.
                    
                    Best regards
                    
                    Egon Binder`

  return (
    <>
    </>
  );
}

export default App;