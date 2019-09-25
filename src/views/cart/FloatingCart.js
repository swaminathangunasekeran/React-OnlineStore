import React from "react"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import CartCard from "components/CartCard";
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import { withRouter } from 'react-router-dom';

const styles = {
    gridFit:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap"

    },

    cartCard:{
        marging:"10px"
    },
    paper:{
        margin:"20px"
    },
    paperGrid:{
        position: "fixed",
        bottom: "30px",
        right: "10%",
        width: "30%",
        height: "300px",
        overflowX: "scroll",
        border: "5px solid #3c4858",
        background: "#fff",
        padding:"10px"
    },
    Checkoutbutton:{
        float:"right",
        marginRight:"20px"
    }
   
}
const useStyles = makeStyles(styles);

function FloatingCart(props){
    const classes = useStyles();
    
   function navToProdDetails () {
    //props.history.push(`/productDetails/${id}`)
 
   
 
    props.history.push( {
     pathname: `/payment/${props.productsInCart[0].id}`,
     state: { detail: props.productsInCart[0] }
   })
 
    // const prodDetails = `/productDetails/${id}`
    // setProductDetails(id)
    }


    if(props.productsInCart && props.productsInCart.length > 0 ){
        return(
            <div  className ={classes.paperGrid}>
            <h1>Cart</h1>
            <Button onClick={navToProdDetails} variant="contained" color="secondary" className={classes.Checkoutbutton}>
                &nbsp; Checkout
            </Button>
            <div className ={classes.paperBorder}>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                    {props.productsInCart.map(product => (
                   
                        <Paper key={product.id} className={classes.paper}>
                        <CartCard  {...product}   ></CartCard>
                        </Paper>
                        
                    ))}
                    </Grid>
                </Grid>
            </Grid> 
            </div>
               
            </div> 
            
           
        )
    }else{
        return null;
    }

}


export default withRouter(FloatingCart);