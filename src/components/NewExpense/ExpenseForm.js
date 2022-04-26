import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ()=>{

    // const [ enteredTitle, setEnteredTitle ] = useState('');
    // const [ enteredAmount, setEnteredAmount ] = useState('');
    // const [ enteredDate, setEnteredDate ] = useState('');

    
    const [ userInput, setUserInput ] =  useState({
        enteredTitle : '',
        enteredAmount : '',
        enteredDate : ''
    });
    
    const titleChangeHandler = (event) =>{
        // setEnteredTitle(event.target.value);
        setUserInput({
            ...userInput,
            enteredTitle :event.target.value
        })
    }

    const amontChangeHandler = (event) =>{
        // setEnteredAmount(event.target.value);
        setUserInput({
            ...userInput,
            enteredAmount :event.target.value
        })
    }

    const dateChangeHandler = (event) =>{
        // setEnteredDate(event.target.value);
        setUserInput({
            ...userInput,
            enteredDate :event.target.value
        })
    }


    return(
        <div> 
            <form  className="new-expense__controls"> 
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