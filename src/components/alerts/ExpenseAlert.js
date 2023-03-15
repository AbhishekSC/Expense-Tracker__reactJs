import React from "react";

function ExpenseAlert(props) {
  return (
    <>
      <div class="alert alert-warning alert-dismissible fade show" role="alert" style={{marginTop: "2px"}} >
        <strong>{props.data}!</strong> has been added successfully.
       
      </div>
    </>
  );
}

export default ExpenseAlert;
