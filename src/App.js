import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  
  const expenses = [
    {  id: "e1" , title: "Buy New Shirt", amount: 2000, date: new Date(2022, 5, 25) } 
   ]

  return (
    <div className="App">
     <h1>App Component</h1>
     <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} ></ExpenseItem>
    </div>
  );
}

export default App;
