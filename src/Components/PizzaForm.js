//import libraries
import React, {useState} from 'react';
import * as yup from 'yup';


const PizzaForm = () => {
    const [pizzaOrder, setPizzaOrder] = useState({
        name: '',
        size: '',
        topping1: '',
        topping2: '',
        topping3: '',
        topping4: '',
        specialInstructions: ''
    });

    const handleChange = (event) => {
        setPizzaOrder({...pizzaOrder, [event.target.name]: event.target.value});
    }

    return (
        <form style={{display: 'flex', flexDirection: 'column'}}>
            <label htmlFor="name" style={{display: 'flex', flexDirection: 'row'}}>
                Name:
                <input type="text" name="name" style={{marginLeft: "10px"}} value={pizzaOrder.name}
                       onChange={(event) => handleChange(event)}/>
            </label>
        </form>
    )
}

export default PizzaForm;
