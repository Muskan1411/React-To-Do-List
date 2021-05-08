import React from 'react';

const SlotMachine = (props) => {
    let {x, y, z} = props;
    if(x === y && y === z) {
        return (
            <>
                <div className="slot_inner">
                    <h1>{x} {y} {z}</h1>
                    <h1 className="heading_style">This is matching.</h1>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="slot_inner">
                    <h1>{x} {y} {z}</h1>
                    <h1 className="heading_style">This is not matching.</h1>
                </div>
            </>
        )
    }
}

const App = () => {
    return (
        <>
            <h1 className="heading_style"> Welcome to <span style={{fontWeight: 'bold'}}> Slot Machine Game </span> </h1>
            <div class="slotmachine">
                <SlotMachine x='😄' y='😄' z='😄'/>
                <hr/>
                <SlotMachine x='😄' y='🎅' z='🎅'/>
                <hr/>
                <SlotMachine x='❤️' y='❤️' z='❤️'/>
                <hr/>
                <SlotMachine x='🍎' y='🍍' z='🍎'/>
                <hr/>
                
            </div>
        </>
    )
}

export default App;