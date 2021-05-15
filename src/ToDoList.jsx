import React from 'react';

const ToDoList = (props) => {

    return (
        <>
            <div className='todo-style'>
                <i onClick={() => {props.onRemoveItem(props.id)}} className='fa fa-times' aria-hidden='true' />
                <li>{props.itemVal}</li>
            </div>
        </>
    )
    
}

export default ToDoList;