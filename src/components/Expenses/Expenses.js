
import { useState } from 'react';
import NewExpense from '../NewExpense/NewExpense';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from "./ExpenseItem";

function Expenses(){

    const initial_expenses = [
        {  id: "e2" , title: "Buy New 222", amount: 20, date: new Date(2020, 5, 25) },
        {  id: "e3" , title: "Buy New 333", amount: 21, date: new Date(2021, 5, 25) },
        {  id: "e4" , title: "Buy New 444", amount: 22, date: new Date(2022, 5, 25) },
        {  id: "e5" , title: "Buy New 555", amount: 22, date: new Date(2022, 5, 25) },
        {  id: "e6" , title: "Buy New 666", amount: 66, date: new Date(2019, 5, 25) },
       ];


       const[filteredYear, setFilteredYear] = useState( '2022' );

       const[expenses, setExpenses] = useState(initial_expenses);
           
      
       const filterChangeHandler = (selectedYear) => {

         setFilteredYear( ( prevState ) => selectedYear );
  
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
      expenses.map( function( expense, index ){
        if( expense.date.getFullYear().toString() === filteredYear.toString() )
        {
              return <ExpenseItem key={index} title={expense.title} amount={expense.amount} date={expense.date} ></ExpenseItem>
        }

      })
    } 


    </div>
);

}

export default Expenses