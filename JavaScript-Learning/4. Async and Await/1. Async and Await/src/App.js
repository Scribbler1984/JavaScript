import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';


/*

Async/Await
----------------------------------------------------------------------------------------------------------------------------------------

Async/await is a modern JavaScript feature that allows you to write asynchronous code in a more synchronous style.
It makes working with Promises more readable and eliminates the need for chaining `.then()` and `.catch()`.

In this example, the `useEffect` function is marked as `async`, and the asynchronous API request is handled using `await`.
This makes the code more straightforward and easier to understand.

----------------------------------------------------------------------------------------------------------------------------------------

*/


function App() {
  useEffect(() => {
    // Asynchronous API request using async/await
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.boredapi.com/api/activity');
        console.log('You could ' + response.data.activity);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    console.log("Test");
    
  }, []);

  return (
    <div>
      {/* Your component JSX goes here */}
    </div>
  );
}

export default App;