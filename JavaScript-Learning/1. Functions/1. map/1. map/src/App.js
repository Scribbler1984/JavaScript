import './App.css';


/*

The map()-Function
----------------------------------------------------------------------------------------------------------------------------------------

The map() function in JavaScript is a higher-order function that is used to transform elements of an array. 
It takes a callback function as an argument and applies that function to each element in the array, creating a 
new array with the results.

Here's a breakdown of how map() works:

Iterate through the Array:
The map() function iterates over each element in the array one by one, starting from the first element and moving to the last.

Apply Callback Function:
For each element, the provided callback function is called. This function takes the current element as an argument and 
performs some operation on it.

Create a New Array:
The result of each function call is then collected into a new array. This new array is the result of the map() function.

Return the New Array:
Finally, the map() function returns the new array containing the transformed elements.

One important thing to note is that the original array remains unchanged. map() creates a new array with the transformed 
elements, leaving the original array intact.

This function is particularly useful when you want to perform the same operation on each element of an array and 
create a new array with the results, without modifying the original array. It's a concise and expressive way to transform data in JavaScript.

----------------------------------------------------------------------------------------------------------------------------------------

*/


function App() {

  const numbers = [5, 3, 9, 1, 4, 5, 8, 9, 6, 3];

  const correctedNumbers = numbers.map(number => {
    return number * 2;
  });

  console.log(correctedNumbers);

  return (
    <div>
      {correctedNumbers.map(number=>{
        return <p>{number}</p>
      })}
    </div>
  );
}

export default App;