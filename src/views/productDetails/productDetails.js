

import React from "react";
import classNames from "classnames";
import Header from "../../components/Header"
import Parallax from "../../components/Parallax"
import HeaderText from "../../components/HeaderText"
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import { makeStyles } from "@material-ui/core/styles";
import ProductList from "../productList/productList"
import { flexbox } from "@material-ui/system";
import Icon from '@mdi/react';
import Button from '@material-ui/core/Button';
import { mdiTabPlus } from '@mdi/js';

const styles = {

  container:{
    width: "100%"
  },
  subContainer:{
    borderRadius: "6px",
    margin: "0 auto",
    padding:"30px",
    height:"auto",
    minWidth:"90%",  
    boxShadow:"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    marginTop:"-16%",
    background:"#fff",
    display:"flex",
    flexDirection:"row"
  },
  imgContainer:{
    padding:"30px",
    maxWidth:"50%",
    " & img": {
      maxWidth:"100%"
    }

  },detailContainer:{
    padding:"30px",
    maxWidth:"50%"
  }

}


const useStyles = makeStyles(styles);

function ProductDetails(props) {
  
    const productId = props.match.params.id
    
    // Just passing from props insted we can take all this info from api call 
    const productDetails = props.location.state ? props.location.state.detail: "" ;
    const classes = useStyles();
    // return  <h2> {productId ? `<a>Product Details h ${productId}</a>` : `${"No Product"}` } </h2> ;
   function navToAdd(productDetails){
      console.log("PRODUCT DETAIL",productDetails);
      props.history.push( {
        pathname: `/payment/${productDetails.id}`,
        state: { detail: productDetails }
      })
   }
   
    return (
      <div>
        {productId && 
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
        <Parallax filter image={require("../../assets/img/landing-bg-2.jpg")}>
        {/* <HeaderText/> */}
        </Parallax>
        <GridContainer className={classes.container}  >
          <GridItem className={classes.subContainer}  xs={12} sm={12} md={6}>
             {/* <h2>Product Id :{productId}</h2>  */}
             <div className={classes.imgContainer}  >
                <img src={productDetails.img} ></img>
             </div >
             {productDetails  && 
            <div className={classes.detailContainer}  >
            <h2>{productDetails.title}</h2>
            <h3 > € {productDetails.price}</h3>
            <p>Eres' daring 'Grigri Fortune' swimsuit has the
               fit and coverage of a bikini in a one-piece 
               silhouette. This fuchsia style is crafted from 
               the label's sculpting peau douce fabric and has
                flattering cutouts through the torso and back. Wear yours with mirrored sunglasses on vacation.</p>
            
                <Button variant="contained" 
                onClick = {() => {navToAdd(productDetails)}}
                color="secondary" className={classes.button}>
                <Icon path={mdiTabPlus}
                title="AllSize"
                size={1}
                color="white"
                />

                  &nbsp; Buy
                </Button>
            </div>
           
            }
             
          </GridItem>
        </GridContainer>
        </div>
         
        
        }
        
      </div>
    
    ) 
    
  }

  export default ProductDetails