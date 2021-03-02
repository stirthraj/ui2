// import React from 'react'
// export default function App(props) {
//   // console.log(props);
//   function date() {
//     const date=new Date().toLocaleTimeString()
//     document.getElementById('time').innerHTML=date;
//   }
//   setInterval(date,1000);
//   return (<>
//   <h1>My name is {props.data.a+props.data.b}</h1>
//   <p id="time"></p>
//   </>);
// }

// class Clock extends React.Component{
//   constructor(props){
//      super(props);
//      this.state={a:new Date(),isToggleOn:true};
//      this.onClickHandler=this.onClickHandler.bind(this);
//   }
  

//   componentDidMount(){
//         this.timerID=setInterval(() => {
//           this.tick()
//         }, 1000);
//   }
//   componentWillUnmount(){
//       clearInterval(this.timerID);
//   }



// tick(){
//   this.setState({a:new Date()});
// }

// onClickHandler=(event)=>{
//   event.preventDefault();
//   this.setState(state=>
//     ({
//       isToggleOn:!state.isToggleOn
//     }));

// }
//   render(){
//     // setInterval(() => {
//     //  this.setState({a:new Date()}) ;
//     // }, 1000);


//     return (
//       <div
//         style={{
//           backgroundColor: "black",
//           color: "white",
//           display: "flex",
//           flexFlow: "row",
//           justifyContent: "space-between",
//         }}
//       >
//         <div>
//           <h1>React Website</h1>

//         </div>
//         <div id="time">{this.state.a.toLocaleTimeString()}</div>
//        <button onClick={this.onClickHandler}>{this.state.isToggleOn?'ON':'OFF'}</button>
//       </div>
//       // sidebar+ main
//     );
//   }
// }
// export default Clock;

export default function Clock(props) {
      // const isLogined=props.data.isLogin;
      // console.warn(props.data.arr);
      // if(isLogined){
      //   return(<Login/>);
      // }
      // else{
      //   return(<Sign/>);
      // }
      const data=props.data;
      console.log({data});
      return(<>
      <ul>
{data.map((post)=>
(
<li key={post.id}>{post.id}.{post.title}<p>{post.content}</p></li>
)
)}
      </ul>
      
      </>);
}

// function Login(props) {
//   return(<h1> Welcome to React</h1>);  
// }
// function Sign(props){
//   return(<h1>Please Login Here</h1>);
// }
