import './App.css';

function App() {

// The need for object destructoring-----------------------------------------//

let hero = {
  name: 'Batman',
  realName: 'Bruce Wayne'
}

let name = hero.name;
let realName = hero.realName;

console.log(name); // => 'Batman',
console.log(realName); // => 'Bruce Wayne'

// The need for object destructoring-----------------------------------------//


// First Example-------------------------------------------------------------//
/*
  In this example, we extract the properties 'name' and 'realName' from our hero object.
  This works just like it would with Array Destructuring. There is no difference.
  Here, we do the same as we did above, but in a more elegant way.
*/

let hero1 = {
  name: 'Superman',
  realName: 'Clark Kent'
}

const { name1, realName1 } = hero1;

console.log(name1); // => 'Superman',
console.log(realName1); // => 'Clark Kent'
// First Example-------------------------------------------------------------//

  return (
    <div>
    
    </div>
  );
}

export default App;
