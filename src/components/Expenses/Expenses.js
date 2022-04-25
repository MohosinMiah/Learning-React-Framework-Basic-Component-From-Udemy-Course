
import ExpenseItem from "./ExpenseItem";
function Expenses(){

    const expenses = [
        {  id: "e1" , title: "Buy New Shirt", amount: 2000, date: new Date(2022, 5, 25) },
        {  id: "e2" , title: "Buy New Shirt", amount: 2000, date: new Date(2022, 5, 25) },
        {  id: "e3" , title: "Buy New Shirt", amount: 2000, date: new Date(2022, 5, 25) }
       ]

return (
    <div className="expenses">
    {
  expenses.map(function(expense, index){
    return <ExpenseItem key={index} title={expense.title} amount={expense.amount} date={expense.date} ></ExpenseItem>
  })
    } 
     

    </div>
);

}

export default Expenses