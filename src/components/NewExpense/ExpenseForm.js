import './ExpenseForm'
const ExpenseForm = ()=>{
    return(
        <div> 
            <form  className="new-expense__controls"> 
            <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-12" max="2021-01-12"></input>
                </div>
                <div className="new-expense__actions">
                <input type="submit" value="Submit" />
                </div>
    

        </form>
        </div>
    )
}

export default ExpenseForm