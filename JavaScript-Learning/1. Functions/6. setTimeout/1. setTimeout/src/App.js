import './App.css';


/*

Timeout with setTimeout
----------------------------------------------------------------------------------------------------------------------------------------

The setTimeout function in JavaScript is used to introduce a delay before executing a specific piece of code. 
It takes two arguments: a callback function and a time delay in milliseconds.

Here's a brief explanation of how setTimeout works in your code:

Set Timeout:
The setTimeout function is invoked with a callback function and a time delay of 2000 milliseconds (2 seconds). 
This means that the provided callback function will be executed after a delay of 2 seconds.

Callback Function:
The callback function passed to setTimeout logs the message "This is a timeout of 2 Seconds." to the console.

Execution:
After the 2-second delay, the callback function is executed, and the specified message is logged to the console.

----------------------------------------------------------------------------------------------------------------------------------------

*/


function App() {

  const timeout = setTimeout(() => {
      console.log("This is a timeout of 2 Seconds.");
  }, 2000);

  timeout();

  return (
    <div>
    </div>
  );
}

export default App;