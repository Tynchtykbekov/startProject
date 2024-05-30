//  import React from "react";
//  import Demo from "./Demo";
// import Button from "./ui/Button";
//  // props - eto peredacha danyx js ot roditels kogo kkom ponenta k dochernim kompenenta
//  function App() {
//   let user = {
//     name: 'jon',
//     age: 20, 
//     isAdmin: true
//   }
//   return (
//     <div>
//       Hello
//       <Demo/>
//       {/* <Button text={'Delete'}/> */}
//       <Button>Delete</Button>
//       <Button>Add</Button>  
//         <Button>Edit</Button>
//     </div>
//   )
//  }
//  export default App;
// import React from "react";
// import Demo from "./Demo";
// import Button from "./ui/Button";
//  function App(){
//   let user = { 
// name: "tyy",
// age: 20,
// isAdmin: true
//  }
//  return(
//   <div>
//     HEllo

//     <Demo/>
//     <Button>Delete</Button>
//     <Button>Add</Button>
//     <Button>Edit</Button>
//   </div>
//  )
// }
//  export default App;
// import React from "react";
// import Demo from "./Demo";
// import Button from "./ui/Button";
//  function App() {
//   let user = {
//     name: 'Theyncs',
//     age: 29,
//     isAdmin: true
//   }
//   return (
//     <div>

//       Hello
//       <Demo/>
//         <Button>delete</Button>
//         <Button>Add</Button>
//         <Button>Edit</Button>

//     </div>
//   )
//  }
//  export default App;
 import React, { useState } from "react";
 import Demo from "./Demo";
 import Button from "./ui/Button";
 function App() {
  const [toggle, setToggle] = useState(true)
 
  const toggleHandler = () => {
    setToggle(prevState => !prevState)
  }
    
 
  let nums = [4, 5, 2, 3, 8, 4, 6]
  return (
    <div>
      {toggle && <p>Hello</p>}
   <Demo text={"This is demo page"} list={nums} /> 
   <Button onClick={toggleHandler}>Toggle</Button>
   <Button>Delete</Button>
   <Button>Add</Button>
   <Button>Edit</Button>

    </div>
  )
 }
 export default App;