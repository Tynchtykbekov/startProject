 import React from "react";
 import Comment from "./Comment";
 const user = {
  
  date: new Date(),
  author: {
    avatarUrl: "https://www.google.com/imgres?q=kitty&imgurl=https%3A%2F%2Fn1s1.hsmedia.ru%2Fa9%2Fdb%2F9c%2Fa9db9c34517dae28f8157cb6c0637e78%2F600x600_1_aa4808a690ad9caaca0628ca4f830f5d%40696x696_0x5TzYOqtY_1965604772345051232.jpg&imgrefurl=https%3A%2F%2Fthegirl.ru%2Farticles%2Fmrachnaya-hello-kitty-8-stilnykh-veshei-s-kuromi-kotoraya-stala-glavnym-aziatskim-trendom-v-2023%2F&docid=7yTluecyyZ0lMM&tbnid=ro-CIsM08T4fpM&vet=12ahUKEwi-q8fm0byGAxUBJRAIHe_0DuYQM3oECB8QAA..i&w=600&h=600&hcb=2&ved=2ahUKEwi-q8fm0byGAxUBJRAIHe_0DuYQM3oECB8QAA",
    name: "Kitty",

  },
  text: "Learinig React is awesome",


 }
 function App() {
  return (
    <div>
<Comment 
author={user.author}
 date={user.date}
  text={user.text}/>
    </div>
  )
 }
 export default App;
