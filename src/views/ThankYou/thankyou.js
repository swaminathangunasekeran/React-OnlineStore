
import React from "react";
import Header from "components/Header"
import Parallax from "components/Parallax"
import HeaderText from "components/HeaderText"
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { makeStyles } from "@material-ui/core/styles";
import ProductList from "../productList/productList"
// import { Link } from "@material-ui/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const styles = {

      container:{
        width: "100%"
      },
      subContainer:{
        borderRadius: "6px",
        margin: "0 auto",
        padding:"30px",
        height:"auto",
        minWidth:"95%",  
        boxShadow:"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        marginTop:"-40px",
        background:"#fff"
      }
}

const useStyles = makeStyles({});

function Thankyou(props) {
  const classes = useStyles();
  const productDetails = props.location.state ? props.location.state.detail: "" ;

    return (
      <div>
   <Header
   color="transparent"
   brand="Material Kit React"
   fixed
   changeColorOnScroll={{
     height: 400,
     color: "dark"
   }}
   ></Header>
    <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <HeaderText/>
    </Parallax>
    <GridContainer className={classes.container}  >
      <GridItem className={classes.subContainer}  xs={12} sm={12} md={6}>
       <h1>Thank you</h1>
        <p>Your order {productDetails && productDetails.title} will be delivered in 5 working days </p>
       <Link to="home">HOME</Link>
      </GridItem> 
    </GridContainer>

      </div>
 
    
    );
  }

  export default Thankyou