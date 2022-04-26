
import { useState } from "react";
import NewExpense from '../NewExpense/NewExpense';
import ExpenseItem from "./ExpenseItem";

function Expenses(){

    const expenses = [
        {  id: "e1" , title: "Buy New Shirt", amount: 2000, date: new Date(2022, 5, 25) },
        {  id: "e2" , title: "Buy ggg Shirt", amount: 2000, date: new Date(2022, 5, 25) },
        {  id: "e3" , title: "Buy New gg", amount: 2000, date: new Date(2022, 5, 25) }
       ];
    const [expensesData,setExpenses]  =  useState(expenses);

const addExpenseDataHandler = (expenseData) => {
  expensesData.push(expenseData);
  setExpenses(expensesData)
  console.log(expensesData);
}


return (
    <div className="expenses">
           <NewExpense addExpenseData={addExpenseDataHandler}></NewExpense>

    {
  expensesData.map(function(expense, index){
    return <ExpenseItem key={index} title={expense.title} amount={expense.amount} date={expense.date} ></ExpenseItem>
  })
    } 

    </div>
);

}

export default Expenses