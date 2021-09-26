/*
....................
*/
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {
    
    //output filtered expenses
    const expensesItems = props.items.map(exp => {
        return (
            <ExpenseItem
                key={exp.id}
                date={exp.date}
                title={exp.title}
                price={exp.amount}
            />
        )
    });
    //conditinal output
     
    if (expensesItems.length === 0) {
       return <h2 className='expenses-list__fallback'>NO Expenses from Year {props.filteredYear}</h2>
    }
    return (
        <ul className='expenses-list'>
        {
        expensesItems
        }
        </ul>
    )
}

export default ExpensesList;