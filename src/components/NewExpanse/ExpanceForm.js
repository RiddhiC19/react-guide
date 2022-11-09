import React , { useState } from "react";

const ExpanceForm=(data)=>{
const [EnterTitle,setEnterTitle] =useState('');
const [EnterAmount,setEnterAmount] =useState('');
const [Enterdate,setEnterDate] =useState('');

const titleChangeHandlr=(event)=>{

  setEnterTitle(event.target.value);
  //console.log(event.target.value);
};
const amountChangeHandler = event => {
  setEnterAmount (event.target.value);
};
const dateChangeHandler =event =>{
  setEnterDate(event.target.value);
};
const submitHandler=(event)=>{

  event.preventDefault();

  const expanceData={
    title:EnterTitle,
    amount:EnterAmount,
    date:new Date(Enterdate),
  };

  data.onSaveExpenseData(expanceData); 
  setEnterTitle('');
  setEnterAmount('');
  setEnterDate('');


  console.log(expanceData);

};

 return <form onSubmit={submitHandler}>
  <div className="new-ex-controls">
    <div className="new-ex-control">
      <label>Title</label>
      <input type="text"
        value={EnterTitle}
       onChange={titleChangeHandlr}/>
    </div>
    <div className="new-ex-control">
      <label>amount</label>
      <input type="number"
       min="0.01" 
       step="0.01"
       value={EnterAmount}
        onChange={amountChangeHandler} />
    </div>
    <div className="new-ex-control">
      <label>Date</label>
      <input type="date"
       min="2019-01-01"
        max="2022-01-01"
        value={Enterdate}
         onChange={dateChangeHandler}/>
    </div>
    <div className="new-ex-action">
      <button type="submit">Add values</button>
    </div>

  </div>
 </form>
};
export default ExpanceForm;