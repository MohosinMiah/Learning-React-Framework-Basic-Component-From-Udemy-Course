import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ()=>{

    const [ enteredTitle, setEnteredTitle ] = useState('');
    const [ enteredAmount, setEnteredAmount ] = useState('');
    const [ enteredDate, setEnteredDate ] = useState('');

    
    // const [ userInput, setUserInput ] =  useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // });
    
    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);   // One way
        // setUserInput({
        //     ...userInput,
        //     enteredTitle :event.target.value   // Second way
        // })

        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle : event.target.value}   // Best way to update user inputed data
        // })
        
    }

    const amontChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount :event.target.value
        // })
    }

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate :event.target.value
        // })
    }

    const formHandler = (event) => {
                    event.preventDefault();
                    const expenseData = {
                        title : enteredTitle,
                        amount : enteredAmount,
                        date : new Date(enteredDate),
                    }
                    console.log(expenseData)
    }

    return(
        <div> 
            <form  onSubmit={formHandler}> 
            <div className="new-expense__controls">
            <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} ></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"  onChange={amontChangeHandler}  ></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-12" max="2021-01-12"  onChange={dateChangeHandler}  ></input>
                </div>
                <div className="new-expense__actions">
                <input type="submit" value="Submit" />
                </div>
    
            </div>

        </form>
        </div>
    )
}

export default ExpenseForm