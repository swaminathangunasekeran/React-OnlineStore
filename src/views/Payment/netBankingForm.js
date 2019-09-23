import React from "react";
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({});
function NetBankingForm(){
  const classes = useStyles();
    return (
      <div>
        

        <p>Please choose your bank</p>
        <List >
              {['HDFC', 'HSBC', 'ICICI', 'StaeBank'].map((text, index) => (
                <Button color="secondary" className={classes.button}
                  button key={text}>
                  {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                  {/* <ListItemText primary={text} /> */}
                  <Typography variant="button" >
                  {text}
                  </Typography>

                </Button>
              ))}
            </List>
            <Button variant="contained" 
             
              color="secondary" className={classes.button}>
                Pay
            </Button>
      </div>
    );
  }

  export default NetBankingForm