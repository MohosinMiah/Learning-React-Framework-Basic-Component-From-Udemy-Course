
import { useState } from 'react';
import NewExpense from '../NewExpense/NewExpense';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from "./ExpenseItem";

function Expenses(){

    const initial_expenses = [
        {  id: "e1" , title: "Buy New Shirt", amount: 2000, date: new Date(2022, 5, 25) },
        {  id: "e2" , title: "Buy ggg Shirt", amount: 2000, date: new Date(2022, 5, 25) },
        {  id: "e3" , title: "Buy New gg", amount: 2000, date: new Date(2022, 5, 25) },
       ];


       const[filteredYear, setFilteredYear] = useState('2020');
       const[expenses, setExpenses] = useState(initial_expenses);

       const filterChangeHandler = (selectedYear) => {
         setFilteredYear(selectedYear);
       }

       const addExpenseHandler = (expenseData) => {
        setExpenses( (prevExpanses) => {
          return [expenseData, ...prevExpanses];
        });
       }

return (
    <div className="expenses">
           <NewExpense addExpense={addExpenseHandler}></NewExpense>
           <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} ></ExpenseFilter>

    {
  expenses.map(function(expense, index){
    return <ExpenseItem key={index} title={expense.title} amount={expense.amount} date={expense.date} ></ExpenseItem>
  })
    } 

    </div>
);

}

export default Expenses