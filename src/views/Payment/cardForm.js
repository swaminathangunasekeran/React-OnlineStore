import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import * as yup from 'yup'; // for everything

// const useStyles = makeStyles({});
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

const month = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];


function CardForm(props){
  const classes = useStyles();
  const [validForm,setValidForm] = React.useState(false);
  const [formDetails, setFormValue] = React.useState({
    name: {value:"",error:false,errorMessage:""},
    cardNumber:  {value:"",error:false,errorMessage:""},
    month:  {value:"JAN",error:false,errorMessage:""},
    year:{value:"2016",error:false,errorMessage:""}, 
    cvv:{value:"",error:false,errorMessage:""}, 
  });
  let nameError,cardError,cvvError = true;

  let cardSchema = yup.object().shape({
    name: yup.object().shape({
      value:yup.string().required()
    }),
    cardNumber: yup.object().shape({
      value:yup.number()
      .required()
      .positive()
      .integer()
    }),
    month: yup.object().shape({
      value:yup.string().required()
    }),
    year: yup.object().shape({
      value:yup.number()
      .required()
      .positive()
      .integer()
    }),
    cvv: yup.object().shape({
      value:yup.number()
      .required()
      .positive()
      .integer()
    }),
   
  });


  const Years = () => {
    let years= []
    for (let i = 2016 ; i<2050;i++){
      years.push(i)
    }

    return years
  }



  function ValidateCreditCardNumber(ccNum) {


    var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    var amexpRegEx = /^(?:3[47][0-9]{13})$/;
    var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
    var isValid = false;
  
    if (visaRegEx.test(ccNum)) {
      isValid = true;
    } else if(mastercardRegEx.test(ccNum)) {
      isValid = true;
    } else if(amexpRegEx.test(ccNum)) {
      isValid = true;
    } else if(discovRegEx.test(ccNum)) {
      isValid = true;
    }
  
    if(isValid) {
      return true
    } else {
      return false
    }
  }


  const handleChange = name => event => {
    // creditCardSchema.
    // validate({ ...formDetails, [name]: event.target.value }).
    // then(function(valid) {
    //   valid; // => true
    // }).catch(function(error){
    //   console.log("error",error)
    // })
    let error = ""
    // setValidForm(true);
  
    
  
    switch(name){
      case "name":
          // var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
          nameError = event.target.value.length > 0 ? false:true
          let errorMessage = nameError ? "not valid name" :"" ;
      
          setFormValue({ ...formDetails, [name]: {
            value: event.target.value,
             error:nameError,
             errorMessage,
            } });
          break;
      case "cardNumber"  :
          cardError =  ValidateCreditCardNumber(event.target.value) ? false : true;
          let cardErrorMessage = cardError?  "not valid card":""
          setFormValue({ ...formDetails, [name]: {
            value: event.target.value, 
            error:cardError,
            errorMessage:cardErrorMessage,
          } });
          break;
      case "cvv":
           let cvvReg = /^[0-9]{3,4}$/
          cvvError =  cvvReg.test(event.target.value) ? false : true;
          let cvvErrorMessage = cvvError?  "not valid CVV ":""
          setFormValue({ ...formDetails, [name]: {
            value: event.target.value, 
            error:cvvError,
            errorMessage:cvvErrorMessage } });
          break;
      default : 
         error = false
  
       

        
    }

    if(!cvvError && !cardError && !nameError) {
       
        cardSchema.isValid(formDetails).then((isvalid) => {
          setValidForm(true);
        }).catch((iserror) => {
          setValidForm(false);
        })
    }else{
      setValidForm(false);
    }

  
   
  };


    return (
      <div>
        <p>Please fill <b> {props.paymentMethod} </b>Details</p>
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="name"
              label="Name"
              style={{ margin: 8 }}
              error={formDetails.name.error}
              placeholder="Name as in card"
              fullWidth
              margin="normal"
              value={formDetails.name.value}
              onChange={handleChange('name')}
              InputLabelProps={{
                shrink: true,
              }}
              helperText={formDetails.name.errorMessage}
            />
             <TextField
              id="cardNumber"
              label="Card number"
              value={formDetails.cardNumber.value}
              error={formDetails.cardNumber.error}
              placeholder="Card number"
              onChange={handleChange('cardNumber')}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              helperText={formDetails.cardNumber.errorMessage}
            />
            
            
            <TextField
              id="month"
              select
              label="Select month"
              className={classes.textField}
              value={formDetails.month.value}
              onChange={handleChange('month')}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText="Please select month"
              margin="normal"
            >
               
              {month.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="year"
              select
              label="Select year"
              className={classes.textField}
              value={formDetails.year.value}
              onChange={handleChange('year')}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText="Please select year"
              margin="normal"
            >
               {Years().map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="cvv"
              label="CVV"
              type="number"
              placeholder="CVV"
              className={classes.textField}
              onChange={handleChange('cvv')}
              value={formDetails.cvv.value}
              error={formDetails.cvv.error}
              margin="normal"
              variant="outlined"
              helperText={formDetails.cvv.errorMessage}
            />
          
           
            
          </form>
          {validForm ?  <Button onClick={props.NavTo}   variant="contained"       
              color="secondary" className={classes.button}>
                Pay
        </Button> :  <Button disabled variant="contained"       
              color="secondary" className={classes.button}>
                Pay
        </Button> }
         {/* <Button onClick={props.NavTo}  variant="contained"       
              color="secondary" className={classes.button}>
                Pay
        </Button>  */}
       
    </div>
    
    );
  }


  export default CardForm