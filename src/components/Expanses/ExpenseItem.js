import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(data){
    // const ExpenseDate =new Date(2022,10,21);
    // const ExpenseTitle="car Insurance";
    // const ExpenseAmount = 100;
    const [title,setTitle]= useState(data.title);
    //let title = data.title;
    
    const clickhandler=()=>{
        setTitle('UPDATED');
        //title= 'updated!';
     console.log(title);
    };
    return (<Card className="expense-wrap">
                <div className="date-class">
                    <ExpenseDate date={data.date}/>

                 
                </div>
                <div className="expense-inner">
                    <h2>{title}</h2>
                 </div>
                 <div className="amount-class">${data.amount}</div>
                 <button  className='btn-c'  onClick={clickhandler}>change title</button>
            </Card>
            );
}

export default ExpenseItem;