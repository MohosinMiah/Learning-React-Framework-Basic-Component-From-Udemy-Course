
import './ExpenseItem.css';
function ExpenseItem(props) {
  return (
    <div className="expense-item">
        <div>{ props.date}</div>
        <div className="expense-item__description"> 
                <h2>Car insurance </h2>
                <div className="expense-item__price">$200</div>
        </div> 
     </div>
  );
}

export default ExpenseItem;
