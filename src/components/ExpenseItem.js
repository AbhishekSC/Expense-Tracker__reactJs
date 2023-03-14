import "../styles/ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{'\u20B9'} {props.price}</div>
      <button type="button" class="btn btn-outline-warning btn-sm">Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
