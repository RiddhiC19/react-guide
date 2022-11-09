import React from "react";
import './NewExpanse.css';
import ExpanceForm from "./ExpanceForm";

const NewExpance=(data)=>{

    const onSaveExpenseDataHandler = (enterExpanceData)=>{
      const expanceData={
        ...enterExpanceData,
        id:Math.random().toString()
      };
      console.log(expanceData);
     data.onAddExpance(expanceData);
    };

   return <div className="new-expance">
  <ExpanceForm onSaveExpenseData={onSaveExpenseDataHandler}/>
  </div>

};
export default NewExpance;