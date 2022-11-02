import './ExpenseDate.css';

function ExpenseDate(data){
    const month = data.date.toLocaleString('default', { month: 'long' });
    const day = data.date.toLocaleString('default',{day:'2-digit'});
     const year =data.date.getFullYear();

     return(
        <div className="d-c">
            <div> {month}</div>
            <div className="day-c"> {day} </div>
            <div> {year}</div>
        </div>
     );
}
export default ExpenseDate; 