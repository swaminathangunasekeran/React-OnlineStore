import React from "react"
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    fab: {
       
        width:"40px",
        height:"40px"
      },
      extendedIcon: {
        marginRight:"10",
      },
      cartQuantity:{
        margin:"-10px 10px",
        width:"70px"
      } 
});

export default  function Counter (props){
    const classes = useStyles();
    
   return (
       <div>
            <Fab onClick = {props.increment} color="primary" aria-label="add" className={classes.fab}>
                <AddIcon />
            </Fab>

            <TextField
                    id="outlined-number"
                    label="Quantity"
                    type="number"
                    value={props.quantity}
                    className={classes.cartQuantity}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
            />

            <Fab onClick = {props.decrement} color="primary" aria-label="add" className={classes.fab}>
                <RemoveIcon />
            </Fab>
       </div>
   
   )

}