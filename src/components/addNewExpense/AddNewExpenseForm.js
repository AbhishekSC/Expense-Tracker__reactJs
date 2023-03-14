import React, { useState } from "react";
import "../../styles/addNewExpenseForm.css";

function AddNewExpenseForm(props) {
  //js variable and function
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //input event
  const changeTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const changeAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const changeDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // form event
  const submitHandler = (event) => {
    event.preventDefault();

    //saving data in an object
    let enteredFormDate = {};
    if (enteredTitle !== "") {
      enteredFormDate = {
        title: enteredTitle,
        price: enteredAmount,
        date: new Date(enteredDate),
      };
    } 
    else {
      window.alert(
        "Field should not be empyt!!\nPlease enter title, amount and date."
      );
      throw new Error("Don't keep field's empyt!");
    }

    //passing enteredFormData from child i.e, form.js to parent i.e, addNewExpense.js
    props.onSaveExpenseData(enteredFormDate);

    //reseting state
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    // default form event
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={changeTitleHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={changeAmountHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2018-01-02"
            max="2022-08-23"
            value={enteredDate}
            onChange={changeDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" class="btn btn-danger btn-sm">
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default AddNewExpenseForm;
