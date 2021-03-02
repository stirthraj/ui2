import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/tailwindcss/dist/tailwind.css";
// import App from "./App";
// import Register from "./components/Register";
import Calculator from "./components/Calculator";

// const [a,...arr]=[1,2,3,4];
// const data={name:'Tirth',a:10,b:100,isLogin:false,arr};

// const post=[ 
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];

//   const element = <App data={post}/>;
// const element=<Register name="Tirth"/>
const element=<Calculator/>

  ReactDOM.render(element, document.getElementById("root"));

reportWebVitals();
