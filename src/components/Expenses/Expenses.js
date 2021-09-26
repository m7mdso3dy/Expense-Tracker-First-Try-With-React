/**
 * .......................
 */
import React from 'react';
import Card from "./../UI/Card";
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react/cjs/react.development';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
///////////////////
const Expenses = (props) => {
    /*fliter year*/
    console.log(props.expenses)
    const [filteredYear, setFilteredYear] = useState('2020');
    const fliterChangeHandler = (selectedYear)=>{
        setFilteredYear(selectedYear);
    }
    ///////////////
    ////////////////
    //////////////////
    //fliter based on the year
    const filterdExpensesItems = props.expenses.filter(exp => {
        return (exp.date.getFullYear().toString() === filteredYear);
    });
    
    
    
    return (
        <Card className='expenses'>
            
            <ExpenseFilter
                selected={filteredYear}
                onChangeFilter={fliterChangeHandler}
            />
            <ExpensesChart expenses={ filterdExpensesItems}/>
            <ExpensesList
                items={filterdExpensesItems}
                filteredYear = {filteredYear}
            
            />
            
            </Card>
        
    )
}

export default Expenses;