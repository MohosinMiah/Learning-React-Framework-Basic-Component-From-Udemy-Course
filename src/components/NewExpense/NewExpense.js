import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props)=> {

const saveExpenseDataHandler = (enteredExpenseData)=> {
    const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
    };
    props.addExpenseData(expenseData);
    console.log(expenseData);

}

return(
    <div className="new-expense">
        <ExpenseForm onSaveExpense={saveExpenseDataHandler}/>

    </div>
)
}
export default NewExpense