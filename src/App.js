import { useState } from "react";
import "./App.css";
import AddNewExpense from "./components/addNewExpense/AddNewExpense";
import Expenses from "./components/Expenses";

const DUMMY_EXPENSE = [
  {
    id: "0",
    title: "Car Insurance",
    price: 1500,
    date: new Date(2019, 4, 10),
  },

  {
    id: "1",
    title: "Toilet Paper",
    price: 500,
    date: new Date(2019, 1, 26),
  },
  {
    id: "2",
    title: "Grocery",
    price: 2900,
    date: new Date(2020, 1, 28),
  },
];

function App() {
  const [enteredExpense, setEnteredExpense] = useState(DUMMY_EXPENSE);

  const AddNewExpenseHandler = (expense) => {
    setEnteredExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <AddNewExpense onAddNewExpense={AddNewExpenseHandler} />
      <Expenses items={enteredExpense} />
    </div>
  );
}

export default App;
