import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "./Grid/GridContainer.js";
import GridItem from "./Grid/GridItem.js";
// import styles from "../assets/jss/material-kit-react/components/parallaxStyle.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";

const useStyles = makeStyles(styles);



export default function HeaderText(props) {
    const classes = useStyles();
        return (
            <GridContainer style={{width: "100%"}} >
            <GridItem style={{margin: "0 auto",textAlign:"center"}} xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Summer sale ! </h1>
              <h4 className={classes.subtitle} >
              Free global delivery for all products. Use coupon <b>25summer </b>for 25% Off
              </h4>
              <br />
             
            </GridItem>
          </GridContainer>
        )
}