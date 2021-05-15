import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

const ToDoList = (props) => {
    const [ line, setLine ] = useState(false);

    const cutTheItem = () => {
        setLine(true);
    }

    return (
        <>
            <div className='todo-style'>
                <Tooltip title="Cut the item">
                    <i className='fa fa-times' aria-hidden='true' onClick={cutTheItem} />
                </Tooltip>
                <li style={{ textDecoration: line ? 'line-through':'none'}}>{props.itemVal}</li>
                <Tooltip title="Delete the item">
                    <DeleteIcon onClick={() => {props.onRemoveItem(props.id)}} className='deleteIcon' />
                </Tooltip>
            </div>
        </>
    )
    
}

export default ToDoList;