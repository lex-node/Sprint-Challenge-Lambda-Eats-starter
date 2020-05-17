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
            size: 'small',
            pepperoni: false,
            extraCheese: false,
            sausage: false,
            basil: false,
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
        setPizzaOrder({
            ...pizzaOrder,
            [event.target.name]:
                event.target.type === "checkbox" ? event.target.checked : event.target.value
        });
    }

    const handleSubmit = (event) => {
        setPizzaOrder({
            name: '',
            size: '',
            pepperoni: '',
            extraCheese: '',
            sausage: '',
            basil: '',
            specialInstructions: ''
        });
    }

    /***************
     COMPONENT
     ***************/
    return (
        <div>
            <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={event => handleSubmit(event)}>
                <label htmlFor="name" style={{display: 'flex', flexDirection: 'row'}}>
                    Name:
                    <input type="text" name="name" style={{marginLeft: "10px"}} value={pizzaOrder.name}
                           onChange={event => handleChange(event)}/>
                </label>
                <label htmlFor="size" style={{display: 'flex', flexDirection: 'row'}}>
                    Size:
                    <select name="size" style={{marginLeft: "10px"}} value={pizzaOrder.size}
                            onChange={event => handleChange(event)}>
                        <option value="small">SMOL</option>
                        <option value="medium">MEDIUM</option>
                        <option value="large">LORGE</option>
                        <option value="xLarge">EXTRA LORGE</option>
                        <option value="xxLarge">MEGA GIGANTE</option>
                    </select>
                </label>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    Toppings (Pick Up To 4):
                    <label htmlFor="pepperoni" style={{display: 'flex', flexDirection: 'row', marginLeft: "15px"}}>
                        Pepperoni:
                        <input type="checkbox" name={'pepperoni'} value={pizzaOrder.pepperoni}
                               onChange={event => handleChange(event)}/>
                    </label>
                    <label htmlFor="extraCheese" style={{display: 'flex', flexDirection: 'row', marginLeft: "15px"}}>
                        Extra Cheese:
                        <input type="checkbox" name={'extraCheese'} value={pizzaOrder.extraCheese}
                               onChange={event => handleChange(event)}/>
                    </label>
                    <label htmlFor="sausage" style={{display: 'flex', flexDirection: 'row', marginLeft: "15px"}}>
                        Sausage:
                        <input type="checkbox" name={'sausage'} value={pizzaOrder.sausage}
                               onChange={event => handleChange(event)}/>
                    </label>
                    <label htmlFor="basil" style={{display: 'flex', flexDirection: 'row', marginLeft: "15px"}}>
                        Basil:
                        <input type="checkbox" name={'basil'} value={pizzaOrder.basil}
                               onChange={event => handleChange(event)}/>
                    </label>
                </div>
                <label htmlFor="specialInstructions" style={{display: 'flex', flexDirection: 'row'}}>
                    Special instructions:
                    <textarea name="specialInstructions" style={{marginLeft: "10px"}}
                              value={pizzaOrder.specialInstructions}
                              onChange={event => handleChange(event)}/>
                </label>
                <button disabled={buttonDisabled} style={{margin: "10px", width: "250px"}}
                        onClick={event => handleSubmit(event)}>
                    Add to Order
                </button>
            </form>
            <pre>{JSON.stringify(pizzaOrder, null, 2)}</pre>
        </div>
    )
}

export default PizzaForm;
