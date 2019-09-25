import React from "react";
import Button from "@material-ui/core/Button";
import Icon from '@mdi/react';
import { mdiCartPlus } from '@mdi/js';
import { makeStyles } from '@material-ui/core/styles';
import Counter from "./CounterButton";


const useStyles = makeStyles({});

const cartButton = ({isproductInCart,addToCart,incrementQuantity,decrementQuantity}) => {
    const classes = useStyles();
    return (
        <div>
            {isproductInCart  ? <Counter 
            quantity={isproductInCart.quantity} 
            increment={incrementQuantity} 
            decrement={decrementQuantity}
            /> :   
            <Button variant="contained" 
        onClick = {(e) => {
            e.preventDefault();
             addToCart()}}  
        color="secondary" className={classes.button}>
           <Icon path={mdiCartPlus}
                title="AllSize"
                size={1}
                color="white"
                />
          &nbsp; Buy
        </Button>}
            
      
        </div>
       
    )
}

export default cartButton