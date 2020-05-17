//import libraries
import React, {useState, useEffect} from 'react';
import * as yup from 'yup';


/***************
 VALIDATION SCHEMA
 ***************/
const formSchema = yup.object().shape({
    name: yup
        .string()
        .required("Name is a required field.")
        .min(2, "Name must be at least two characters")
});

const PizzaForm = () => {

    /***************
     HOOKS
     ***************/

        //sets contents of pizza order
    const [pizzaOrder, setPizzaOrder] = useState({
            name: '',
            size: '',
            topping1: '',
            topping2: '',
            topping3: '',
            topping4: '',
            specialInstructions: ''
        });

    //sets button to disabled or enabled; button is disabled by default
    const [buttonDisabled, setButtonDisabled] = useState(true);

    //validates inputs every time the form inputs/pizza order change; if inputs are valid, submit button is enabled
    useEffect(() => {
        formSchema.isValid(pizzaOrder).then(valid => {
            setButtonDisabled(!valid);
        });
    }, [pizzaOrder]);


    /***************
     EVENT HANDLERS
     ***************/
    const handleChange = (event) => {
        setPizzaOrder({...pizzaOrder, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        setPizzaOrder({
            name: '',
            size: '',
            topping1: '',
            topping2: '',
            topping3: '',
            topping4: '',
            specialInstructions: ''
        });
    }

    /***************
     COMPONENT
     ***************/
    return (
        <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={event => handleSubmit(event)}>
            <label htmlFor="name" style={{display: 'flex', flexDirection: 'row'}}>
                Name:
                <input type="text" name="name" style={{marginLeft: "10px"}} value={pizzaOrder.name}
                       onChange={event => handleChange(event)}/>
            </label>
            <button disabled={buttonDisabled} style={{margin: "10px", width: "250px"}}
                    onClick={event => handleSubmit(event)}>Submit
            </button>
        </form>
    )
}

export default PizzaForm;
