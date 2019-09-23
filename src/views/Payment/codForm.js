import React from "react";

function CODForm(){
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

         placeholder="Address"
         className={classes.input}
         inputProps={{
           'aria-label': 'Name',
         }}
         />
           <Input

           placeholder="PinCode"
           className={classes.input}
           type="number"
           inputProps={{
             'aria-label': 'CVV',
           }}
/>
         
         
     </form>
     <Button variant="contained" 
               
               color="secondary" className={classes.button}>
                 Submit
             </Button>
   </div>
     </div>
     
     );
   }

export default CODForm;   