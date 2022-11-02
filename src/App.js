
import ExpenseItem from './components/Expanses/ExpenseItem';
import logo from './logo.svg';
import './App.css';


function App() {

    const expence=[
      {
        id:'e1',
        date:new Date(2022,10,21), 
        title:'car Insurance',
        amount:100,
      },
      {
        id:'e1',
        date:new Date(2022,11,21), 
        title:'bike Insurance',
        amount:200,
      },
      {
        id:'e1',
        date:new Date(2022,12,21), 
        title:'cycle Insurance',
        amount:300,
      }
    ];

  return (
    <div className="outer-wrap">
      <h2>React demo</h2>

    <ExpenseItem date={expence[0].date}
                title={expence[0].title}
                amount={expence[0].amount} > 
    </ExpenseItem>
    <ExpenseItem date={expence[1].date}
                title={expence[1].title}
                amount={expence[1].amount} > 
    </ExpenseItem>
    <ExpenseItem date={expence[2].date}
                title={expence[2].title}
                amount={expence[2].amount} > 
    </ExpenseItem>
 
    </div>
  );
}

export default App;
