import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(data) {
  // const ExpenseDate =new Date(2022,10,21);
  // const ExpenseTitle="car Insurance";
  // const ExpenseAmount = 100;

  //let title = data.title;
  const [titlename, SetNewTitle] = useState(data.title);

  //  const[t,newT]=useState("");

  //  const changeHandler=(event)=>{
  //   //SetNewTitle(event.target.value);
  //   newT(event.target.value);
  //  }

  const clickHander = () => {
    SetNewTitle('changed');
    //SetNewTitle(t);
    //console.log('evaluted');
  };

  return (
    <Card className="expense-wrap" itemKey={data.key}>
      <div className="date-class">
        <ExpenseDate date={data.date} />
      </div>
      <div className="expense-inner">
        <h2>{data.title}</h2>
      </div>
      <div className="amount-class">${data.amount}</div>
      {/* <input type="text" value={t} onChange={changeHandler}></input> */}
      <button className="btn-c" onClick={clickHander}>
        change title
      </button>
    </Card>
  );
}

export default ExpenseItem;
