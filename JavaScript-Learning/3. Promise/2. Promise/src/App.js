import logo from './logo.svg';
import './App.css';

function App() {

  let p = new Promise((resolve, reject) =>{
    let a = 1 + 1
    if(a==2){
      resolve('Success')
    }else{
      reject('Failed')
    }
  })

  p.then((message)=>{
    console.log('This is in then ' + message)
  }).catch((message)=>{
    console.log('This is in catch ' + message)
  })

  //--------------------------------------------------------------------------------------//

  const recordVideoOne = new Promise((resolve, reject)=>{
    resolve('Video 1 Recorded')
  })

  const recordVideoTwo = new Promise((resolve, reject)=>{
    resolve('Video 2 Recorded')
  })

  const recordVideoThree = new Promise((resolve, reject)=>{
    resolve('Video 3 Recorded')
  })

  Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
  ]).then((message)=>{
    console.log(message)
  })

  //--------------------------------------------------------------------------------------//

  return (
    <div>
      
    </div>
  );
}

export default App;
