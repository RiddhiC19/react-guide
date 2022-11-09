
//import ExpenseItem from './components/Expanses/ExpenseItem';
import React,{useState} from 'react';
import NewExpance from './components/NewExpanse/NewExpance';
import Expanses from './components/Expanses/Expanses';
import logo from './logo.svg';
import './App.css';


let dummy_expances=[
  {
    id:'e1',  
    title:'car Insurance',
    amount:100,
    date:new Date(2022,10,21), 
  },
  {
    id:'e2',   
    title:'bike Insurance',
    amount:200,
    date:new Date(2022,11,21), 
  },
  {
    id:'e3',    
    title:'cycle Insurance',
    amount:300,
    date:new Date(2022,12,21),
  }
 
];


function App() {

 
    const [expances,setNewExpances]=useState(dummy_expances);


     const AddExpenceHandler = (expance) =>{
       const updatedExpance = [expance,...expances];
       console.log('[updatedExpance ] ===>',updatedExpance)
      setNewExpances(updatedExpance);
      // console.log('in app.js');
      // console.log(expance);
     };
  return (
    <div className="outer-wrap">
      <h2>React demo</h2>
    <NewExpance onAddExpance={AddExpenceHandler}></NewExpance>
    <Expanses item={expances}/>
 
    </div>
  );
}

export default App;
