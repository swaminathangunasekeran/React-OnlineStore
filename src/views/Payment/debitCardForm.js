import React from "react";

function DebitCardForm(){
    return (
      <div>

    
    <p>Please fill <b> {paymentMethod} </b>Details</p>
    <div className={classes.formContainer}>
    <form className={classes.root} noValidate>
        <Input
          placeholder="Name"
          className={classes.input}
          inputProps={{
            'aria-label': 'Name',
          }}
        />
        <Input
          placeholder="Debit card Number"
          className={classes.input}
          type="number"
          inputProps={{
            'aria-label': 'Card Number',
          }}
        />
        <TextField
          id="date"
          label="ExpiryDate"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Input

          placeholder="CVV"
          className={classes.input}
          type="number"
          inputProps={{
            'aria-label': 'CVV',
          }}
        />
    </form>
    <Button variant="contained" 
              
              color="secondary" className={classes.button}>
                Pay
    </Button>
  </div>
    </div>
    
    );
  }

  export default DebitCardForm