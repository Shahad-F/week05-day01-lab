 import {React, useState} from 'react'
 import { createContext } from 'react';
import './App.css';


//onst employeeContext=React.createContext();

//parent
const UserContext =createContext();

export default function App (){

  const[user,setUser] =useState('Shahad');


  return(
    <>
    <h1>{`Hello ${user}`}</h1>
    <Child1 user={user}/>
    </>
  )
}

function Child1({user}){

  return(
    <>
    <h2>{`Child function`}</h2>
    <Child2 user={user}/>
    </>
  )
}
function Child2({user}){
  return(
    <>
    <h3>{`Hello ${user} in Child 2`}</h3>
    </>
  )
}

// export default  class App extends React.Component{
   
//   constructor(props){
//     super(props);
//       this.state={

//         id:102,
//         Name:'Shahad',
//         Location:'Riyadh',
//         Salary:20000
// };
//   }

//   render(){

// return(
//   <>
//   <h1>This is class App</h1>

// <p>Employee ID is :{this.state.id}</p>

//   <employeeContext.Provider value={this.state}>
//   <Employee/>
//   </employeeContext.Provider>
   
//   </>
// )
//   }
// }
// ////////////////////
//  class Employee extends React.Component{

//   static context =employeeContext;


//   render(){
//     return(
//       <>
//         <h2>This is class Employee</h2>
//    <p>Employee ID is :<b> {this.context.id}</b></p>
//         <Salary/>
//       </>
//     )
//   }
// }
//  ////////////////////
//  class Salary extends React.Component{

//   static context=employeeContext;
//    render(){
//      return(
//        <>
//                <h3>This is class Salary</h3>
//                <p>Employee ID is : <b>{this.context.id}</b></p>
//        </>
//      )
//    }
//  }
