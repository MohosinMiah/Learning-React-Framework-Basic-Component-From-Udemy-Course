
import ExpenseDate from './ExpenseData';
import './ExpenseItem.css';
function ExpenseItem(props) {

  // const [ title, setTitle ] = useState(props.title)    

  // function clickHandler() {
  //   setTitle('Update Title');
  // }

  return (
    <div className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description"> 
                <h2>{props.title} </h2>
                <div className="expense-item__price">${props.amount}</div>
        </div> 
        {/* <button onClick={clickHandler}>Add New</button> */}

     </div>
  );
}

export default ExpenseItem;
