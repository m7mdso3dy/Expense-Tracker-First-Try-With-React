/**
 * .......................
 */
import React from 'react';
import Card from "./../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
const Expenses = (props) => {
    let expensesItems = props.expenses.map(exp => {
        return (
            <ExpenseItem
        key ={exp.id}
        date={exp.date}
        price={exp.amount}
        title = {exp.title}
      />
        )
    })
    console.log(expensesItems);
    return (
        <Card className='expenses'>
            {
                expensesItems
            }
            </Card>
        
    )
}

export default Expenses;