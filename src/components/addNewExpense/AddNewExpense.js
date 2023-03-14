import React from "react";
import AddNewExpenseForm from "./AddNewExpenseForm";
import "../../styles/addNewExpense.css";

function AddNewExpense(props) {
  //taking data from child i.e, newExpenseForm.js to parent i.e, newExpense.js
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddNewExpense(expenseData);
    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <AddNewExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> 
    </div>
  );
}

export default AddNewExpense;
