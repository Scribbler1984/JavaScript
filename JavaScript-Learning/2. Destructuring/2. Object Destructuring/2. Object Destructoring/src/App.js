import './App.css';

function App() {

  const personOne = {
    name: 'Kyle',
    age: 24,
    address: {
      city: 'Somewhere',
      state: 'One of them'
    } 
  }

  const personTwo = {
    name: 'Sally',
    age: 32,
    address: {
      city: 'Somewhere',
      state: 'One of them'
    } 
  }

  /* Regular destructoring
  const {name, age} = personTwo;
  console.log(name);
  console.log(age);
  */

  /* Destructoring with diffrent variable name
  const {name: firstName, age} = personTwo;
  console.log(firstName);
  console.log(age);
  */

  /* Destructoring with default value
  const {name: firstName, age, favoriteFood = 'Rice'} = personTwo;
  console.log(firstName);
  console.log(age);
  console.log(favoriteFood);
  */

  /* Destructoring with the spread operator and rest
  const {name, age, ...rest} = personTwo;
  console.log(name);
  console.log(age);
  console.log(rest)
  */

  /*
  const { name: firstName, address: { city } } = personTwo
  console.log(firstName);
  console.log(address);
  */

  return (
    <div>
      
    </div>
  );
}

export default App;
