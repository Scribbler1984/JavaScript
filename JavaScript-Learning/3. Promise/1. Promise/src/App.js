import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';


/*

The Promise
----------------------------------------------------------------------------------------------------------------------------------------

A Promise is a JavaScript object representing the eventual completion or failure of an asynchronous operation. 

It is used to handle asynchronous operations, such as making HTTP requests, in a more readable and manageable way.

In this example, axios.get() returns a Promise. The Promise has 3 states:

1. **Pending:** 
The initial state; the asynchronous operation is not yet completed.

2. **Fulfilled:** 
The operation completed successfully, and the promise returns a value (in this case, the response 
data from the API request).

3. **Rejected:** 
The operation failed, and the promise returns an error.

The `.then()` function is used to handle the fulfillment of the promise (when the asynchronous operation is successful), 
and the `.catch()` function is used to handle the rejection of the promise (when an error occurs).

Be cautious, as it is not clear when the Promise is ready to be used. `console.log("test")` could be executed before
the promise has resolved. This code runs asynchronously.

----------------------------------------------------------------------------------------------------------------------------------------

*/


function App() {
  
  useEffect(() => {
    // Asynchronous API request
    axios.get('https://www.boredapi.com/api/activity')
      .then(response => {
        console.log('You could ' + response.data.activity);
      })
      .catch(error => {
        console.log(error);
      });

    console.log("Test");
  }, []);

  return (
    <div>
      {/* Your component JSX goes here */}
    </div>
  );
}

export default App;
