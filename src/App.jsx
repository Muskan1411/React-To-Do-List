import React, { useState } from 'react';
import ToDoList from './ToDoList';  
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const App = () => {
    const [ item, setItem ] = useState('');
    const [ itemsArr, setItemsArr ] = useState([]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setItem(value);
    }

    const addItem = (event) => {
        setItemsArr((oldValues) => {
            return [...oldValues, item];
        })
        setItem('');
    }

    const deleteItem = (id) => {
        setItemsArr((oldValues) => {
            return oldValues.filter((elem, index) => {
                return id !== index;
            })
        })
    }

    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <br/>
                    <h1>To-do list</h1>
                    <br/>
                    <input type='text' placeholder='Add an item' value={item} onChange={handleInputChange} />
                    <Button className='button' onClick={addItem}><AddIcon /></Button>

                    <ol>
                        {itemsArr.map((item, index) => {
                            return <ToDoList key={index} id={index} itemVal={item} onRemoveItem={deleteItem}/>
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default App;