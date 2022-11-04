import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(data){
    // const ExpenseDate =new Date(2022,10,21);
    // const ExpenseTitle="car Insurance";
    // const ExpenseAmount = 100;
   
    //let title = data.title;
  const[titlename,SetNewTitle]=useState(data.title);

  const clickHander=()=>{
    SetNewTitle('changed');
    //console.log('evaluted');
  }
   
    return (<Card className="expense-wrap">
                <div className="date-class">
                    <ExpenseDate date={data.date}/>

                 
                </div>
                <div className="expense-inner">
                    <h2>{titlename}</h2>
                 </div>
                 <div className="amount-class">${data.amount}</div>
                 <button  className='btn-c' onClick={clickHander} >change title</button>
            </Card>
            );
}

export default ExpenseItem;