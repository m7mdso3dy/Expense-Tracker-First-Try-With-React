/*
................
*/
import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseDate = {
            ...enteredExpenseData,
            id : Math.trunc(Math.random()*500).toString()
        }
        props.onAddExpense(expenseDate);
    };
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}
export default NewExpense