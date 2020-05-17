import React from 'react';

const PizzaForm = () => {
    return (
        <form style={{display: 'flex', flexDirection: 'column'}}>
            <label htmlFor="name" style={{display: 'flex', flexDirection: 'row'}}>
                Name:
                <input type="text" name="name" style={{marginLeft: "10px"}}/>
            </label>
        </form>
    )
}

export default PizzaForm;
