// import React, { useState } from "react";
// import "./styles.css";

// class App extends React.Component {

//   constructor(){
//     super();

//     this.state={
//       color:"lightgray"
//     }
//   }

//   updatecolor=(colorValue)=>{
//     this.setState({
//       color:colorValue
//     })
//   }
//   render() {
//     return (
//       <>
//         <div style={{ display: "flex", padding: "12px", margin: "12px" }}>
//           <div
//             style={{
//               background: "red",
//               height: "70px",
//               width: "70px",
//               margin: "20px"
//             }}
//             onMouseMove={()=>{
//               this.updatecolor("red")
//             }}
//           ></div>
//           <div
//             style={{
//               background: "yellow",
//               height: "70px",
//               width: "70px",
//               margin: "20px"
//             }}

//             onMouseMove={()=>[
//               this.updatecolor("yellow")
//             ]}

//           ></div>
//           <div
//             style={{
//               background: "blue",
//               height: "70px",
//               width: "70px",
//               margin: "20px"
//             }}
//             onMouseMove={()=>{
//               this.updatecolor("blue")
//             }}
//           ></div>
//           <div
//             style={{
//               background: "black",
//               height: "70px",
//               width: "70px",
//               margin: "20px"
//             }}
//             onMouseMove={()=>{
//               this.updatecolor("black")
//             }}
//           ></div>
//           <div
//             style={{
//               background: "orange",
//               height: "70px",
//               width: "70px",
//               margin: "20px"
//             }}
//             onMouseMove={()=>{
//               this.updatecolor("orange")
//             }}
//           ></div>
//         </div>
//         <div className="target-div" style={{background:this.state.color}}>

//         </div>
//       </>
//     );
//   }
// }
// export default App;

import { useState } from "react";
import "./styles.css";
function App() {
  const [color, setColor] = useState("lightgray");

  const updatecolor = (colorValue) => [setColor(colorValue)];
  return (
    <>
      <div style={{ display: "flex", padding: "12px", margin: "12px" }}>
        <div
          style={{
            background: "red",
            height: "70px",
            width: "70px",
            margin: "20px"
          }}
          onMouseMove={() => {
            updatecolor("red");
          }}
        ></div>
        <div
          style={{
            background: "yellow",
            height: "70px",
            width: "70px",
            margin: "20px"
          }}
          onMouseMove={() => {
            updatecolor("yellow");
          }}
        ></div>
        <div
          style={{
            background: "blue",
            height: "70px",
            width: "70px",
            margin: "20px"
          }}
          onMouseMove={() => {
            updatecolor("blue");
          }}
        ></div>
        <div
          style={{
            background: "black",
            height: "70px",
            width: "70px",
            margin: "20px"
          }}
          onMouseMove={() => {
            updatecolor("black");
          }}
        ></div>
        <div
          style={{
            background: "orange",
            height: "70px",
            width: "70px",
            margin: "20px"
          }}
          onMouseMove={() => {
            updatecolor("orange");
          }}
        ></div>
      </div>
      <div className="target-div" style={{ background: color }}></div>
    </>
  );
}

export default App;
