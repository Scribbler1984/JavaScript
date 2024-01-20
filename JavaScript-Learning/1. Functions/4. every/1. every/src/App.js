import './App.css';


/*

The every() function
----------------------------------------------------------------------------------------------------------------------------------------

The every() function in JavaScript is a function that is available for arrays. It is used to test whether 
all elements in an array pass a provided function. This method returns a boolean value:

If the provided function returns true for every element in the array, then every() returns true.

If the provided function returns false for at least one element in the array, then every() returns false.

In simpler terms, every() checks if all elements of the array satisfy a certain condition specified by the provided function.

----------------------------------------------------------------------------------------------------------------------------------------

*/


function App() {

  const entries = [
    {
        id: 1
    },
    
    {
        id: 2
    },
    
    {
        id: 3  
    },
  ];

  if(entries.every(entry => {
    return Number.isInteger(entry.id) && entry.id > 0;
  })) {
    console.log("All the entries have a valid id")
  }

  return (
    <>
    
    </>
  );
}

export default App;
