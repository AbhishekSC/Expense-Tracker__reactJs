import { useState } from "react";
import "../styles/Expenses.css";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseFilterList from "./ExpenseFilterList";
// import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear)
    setfilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  console.log( "filteredExpense" + filteredExpenses)

  // //variable for listing content
  // let expenseContent = <p style={{ color: "white" }}>No expense found !</p>;

  // // overWritting the variable
  // if (filteredExpenses.length > 0) {
  //   expenseContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       price={expense.price}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {/* first way */}
        {/* {filteredExpenses.length === 0 ? (
          <p style={{ color: "white" }}>No expense found !</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              price={expense.price}
              date={expense.date}
            />
          ))
        )} */}

        {/* second way */}
        {/* In this, if first statement will give true then it will return second statement i.e, no expense found! */}
        {/* {filteredExpenses.length === 0 && (
          <p style={{ color: "white" }}>No expense found !</p>
        )}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              price={expense.price}
              date={expense.date}
            />
          ))} */}

        {/* Third way or most optimised way */}
        {/* {expenseContent} */}

        {/* fourth way */}
        <ExpenseChart expenses= {filteredExpenses} /> 
        <ExpenseFilterList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
