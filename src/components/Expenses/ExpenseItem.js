////////////////////////////
import React,{useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './../UI/Card';
const ExpenseItem = (props) => {
    const [title,setTitle] = useState(props.title);
    
    const clickHandler = () => {
        setTitle('Updated');
        console.log('hi');
    }

    return (
       
        <Card className = 'expense-item'>
            <ExpenseDate date={ props.date}/>
            <div className='expense-item__description '>
                <h2>{ title}</h2>
                <div className='expense-item__price'>${props.price}</div>
            </div>
            <button onClick={clickHandler}>Chang Title</button>
            </Card>
        
        );
}

export default ExpenseItem;