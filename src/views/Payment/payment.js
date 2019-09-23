

import React from "react";
import classNames from "classnames";
import Header from "components/Header"
import Parallax from "components/Parallax"
import HeaderText from "components/HeaderText"
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { makeStyles } from "@material-ui/core/styles";
import ProductList from "../productList/productList"
import { flexbox } from "@material-ui/system";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Icon from '@mdi/react';

import { mdiTabPlus } from '@mdi/js';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import CardForm from "./cardForm"
import NetBanking from"./netBankingForm"

const styles = {


  input: {
    margin: "5%",
  },

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
  },



}


const useStyles = makeStyles(styles);

function Payment(props) {
  
    const productId = props.match.params.id;
    const [paymentMethod, setPaymentMethod] = React.useState("CreditCard");
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    // Just passing from props insted we can take all this info from api call 
    const productDetails = props.location.state ? props.location.state.detail: "" ;
    const classes = useStyles();
    // return  <h2> {productId ? `<a>Product Details h ${productId}</a>` : `${"No Product"}` } </h2> ;
  
    function handleDateChange(date) {
      setSelectedDate(date);
    }


    function ChangePaymentOption(event,text){
      setPaymentMethod(text)
    } 

    function thankYouPage (){
      props.history.push( {
        pathname: `/Thankyou`,
        state: { detail: productDetails }
      })
    }


 
    function renderPaymentMethod(paymentMethod){
      switch(paymentMethod) {
        case 'CreditCard':
            return <CardForm NavTo={thankYouPage} paymentMethod="creditCard"/>
        case 'Debit Card':
          return <CardForm NavTo={thankYouPage} paymentMethod="DebitCard"/>
        case "NetBanking" : 
          return <NetBanking/>
        // case "COD" : 
        // return  CODForm()
        default:
          return <CardForm NavTo={thankYouPage} paymentMethod="creditCard"/>
      }   
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
        <Parallax filter image={require("assets/img/landing-bg-3.jpg")}>
        {/* <HeaderText/> */}
        </Parallax>

        <GridContainer className={classes.container}  >
           
          <GridItem className={classes.subContainer}  xs={12} sm={12} md={6}>
             {/* <h2>Product Id :{productId}</h2>  */}
             <div className={classes.imgContainer}  >
              
                <ul>
                <List >
                {['CreditCard', 'Debit Card', 'NetBanking', 'COD'].map((text, index) => (
                  <ListItem onClick = {(event) => {setPaymentMethod(text)}}  button key={text}>
                    {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                    {/* <ListItemText primary={text} /> */}
                    <Typography variant="button" >
                    {text}
                    </Typography>

                  </ListItem>
                ))}
              </List>
                </ul>
             </div >
             {productDetails  && 
            <div className={classes.detailContainer}  >
            <h2>{paymentMethod}</h2>
            <p> <b>Product:</b>  {productDetails.title}</p>
            <p ><b>Price :</b>   € {productDetails.price}</p>
            
               {
                renderPaymentMethod(paymentMethod)
               }
            </div>
           
            }
             
          </GridItem>
        </GridContainer>
        </div>
         
        
        }
        
      </div>
    
    ) 
    
  }

  export default Payment