import React from 'react'
import '../styles/expenseFilterList.css'
import ExpenseItem from './ExpenseItem'

function ExpenseFilterList(props){

  if(props.items.length === 0){
    return <h3 className='expense-list__fallback' >No expense found!</h3>
  }

  return (
    <ul className='expense-list' >
       {
         props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              price={expense.price}
              date={expense.date}
            />
          ))
       }
    </ul>
  )

}

export default ExpenseFilterList
