import React, { useEffect, useState } from 'react';


/*

The some() function
----------------------------------------------------------------------------------------------------------------------------------------

The some() function in JavaScript is a method that is available for arrays. It is used to test whether at least one element in 
the array passes the test implemented by the provided function. The function returns a Boolean value:

If at least one element passes the test, some() returns true.
If none of the elements pass the test, it returns false.
In other words, it helps you determine if there is at least one element in the array that satisfies a certain condition.

Here's the basic idea:

1. You provide a callback function to the some() method.
2. This callback function is applied to each element in the array until one element returns true.
3. If any element returns true, the some() method immediately stops iterating and returns true.
4. If none of the elements return true, the method returns false.
5. It's a convenient way to check for the presence of a satisfying condition in an array without having to manually iterate through all the elements.

----------------------------------------------------------------------------------------------------------------------------------------

*/


function App() {
  
  const persons = [
    {
      name: 'Person 1',
      age: 36,
    },
    {
      name: 'Person 2',
      age: 40,
    },
    {
      name: 'Person 3',
      age: 50,
    },
  ];

  const [hasPersonOver35, setHasPersonOver35] = useState(false);

  useEffect(() => {
    const result = persons.some((person) => person.age > 35);
    setHasPersonOver35(result);
  }, []);

  return (
    <div>
      <p>Has person over 35: {hasPersonOver35.toString()}</p>
    </div>
  );
}


export default App;