// import React, { useRef } from 'react';
// import './App.css';

// function App() {
//   let divR = useRef();
//   let divB = useRef();

//   function handleRed() {
//     if (divR.current) {
//       divR.current.style.backgroundColor = 'blue';
//     }
//   }

//   function handleBlue() {
//     if (divB.current) {
//       divB.current.style.backgroundColor = 'red';
//     }
//   }

//   return (
//     <>
     
//       <div className='div-1-red' ref={divR} onClick={handleRed}>
      
//       </div>
//       <div className='div-2-blue' ref={divB} onClick={handleBlue}>
       
//       </div>
//     </>
//   );
// }

// export default App;




import { createContext, useRef, useState } from 'react';
import A from './A';
import B from './B';
export const DataContext = createContext()

function App() {

  let [name,setName] = useState("Chaitanya")


  return (
  
    <>
      <DataContext.Provider value={{name:name}}>
        <A/>
        <B/>
      </DataContext.Provider>
    </>
  )
}

export default App
