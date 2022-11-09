
import React , { useState } from "react";


import './Expanses.css';
import ExpenseItem from "./ExpenseItem";
function Expanses(data){


 return(
   <div className="WRP">
 
  {
    data.item.map(
      expense =>(
        <ExpenseItem 
        title={expense.title}
        amount={expense.amount}
        date={expense.date} 
        itemKey={expense.id}> 
        </ExpenseItem>
      )
    )
  }
  
   {/* <ExpenseItem date={data.item[0].date}
                title={data.item[0].title}
                amount={data.item[0].amount} > 
    </ExpenseItem>
    <ExpenseItem date={data.item[1].date}
                title={data.item[1].title}
                amount={data.item[1].amount} > 
      </ExpenseItem>          
    <ExpenseItem date={data.item[2].date}
                title={data.item[2].title}
                amount={data.item[2].amount} > 
    </ExpenseItem> */}
   </div>

 ); 

}
export default Expanses;