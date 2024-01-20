import './App.css';


/*

  Die slice()-Funktion
----------------------------------------------------------------------------------------------------------------------------------------

  The slice function is used to extract a portion of a string (or an array) based on specified start and end indices. 
  In the provided code:

  The headline variable contains a string.

  The startIndex is set to the index of the substring "guest" within the headline. In this case, it's 29.

  The endIndex is set to the index of the substring "waiting" within the headline. In this case, it's 50.

  The slice function is then applied to the headline string using the startIndex and endIndex. It extracts the portion of 
  the string starting from the index specified by startIndex (inclusive) up to, but not including, the index specified by endIndex. The result is stored in the newHeadline variable.

  The console.log(newHeadline); statement prints the extracted substring, which is "guest we've all been", to the console.

  In summary, the slice function here is used to isolate and extract a specific portion of the headline string, delimited by the 
  
  positions of the words "guest" and "waiting".
  
----------------------------------------------------------------------------------------------------------------------------------------

*/


function App() {

  const headline = "And in tonigh`s special, the guest we`ve all been waiting for!"
  
  const startIndex = headline.indexOf("guest");
  const endIndex = headline.indexOf("waiting");

  console.log(headline.indexOf("guest")) // 29
  console.log(headline.indexOf("waiting")) // 50

  const newHeadline = headline.slice(startIndex, endIndex);
  
  console.log(newHeadline); // guest we`ve all been

  return (
    <div>
      
    </div>
  );
}

export default App;
