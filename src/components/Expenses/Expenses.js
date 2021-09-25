/**
 * .......................
 */
import React from 'react';
import Card from "./../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react/cjs/react.development';
const Expenses = (props) => {
    let expensesItems = props.expenses.map(exp => {
        return (
            <ExpenseItem
                key={exp.id}
                date={exp.date}
                price={exp.amount}
                title={exp.title}
            />
        )
    });
    const [filteredYear, setFilteredYear] = useState('2020');
    const fliterChangeHandler = (selectedYear)=>{
        setFilteredYear(selectedYear);
}



    return (
        <Card className='expenses'>
            <ExpenseFilter
                selected={filteredYear}
                onChangeFilter={fliterChangeHandler}
            />
            {
                expensesItems
            }
            </Card>
        
    )
}

export default Expenses;