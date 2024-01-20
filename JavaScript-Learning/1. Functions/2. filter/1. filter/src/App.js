import './App.css';


/*

  The filter() Function
  ----------------------------------------------------------------------------------------------------------------------------------------

  The filter() function is an array method in JavaScript that allows iterating through an existing array
  and keeping only the elements that meet a specific condition. It takes a callback function
  as an argument, which is called for each element in the array. The callback function returns either 'true' or 'false'
  depending on whether the current element should be kept or removed.

  In the example below, we use the filter() function to select from an array of numbers those that
  are greater than 20. The filter logic defined in the callback function (number > 20) determines which elements
  will be included in the new array ('filteredNumbers').

  ----------------------------------------------------------------------------------------------------------------------------------------

*/


function App() {

  const numbers = [5,10,2,88,3,6,4,88,33,45]

  const filteredNumbers = numbers.filter(number=>{
    return number > 20
  })

  console.log(filteredNumbers); // 88, 88, 33, 45
  
  return (
    <div>
      
    </div>
  );
}

export default App;
