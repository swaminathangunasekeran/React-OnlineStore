import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductCard from "components/Card";
import ProductList from 'data/productList';


const styles = {
    gridFit:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap"
    }
}
const useStyles = makeStyles(styles);

export default function productList() {
    const classes = useStyles();
  
    const listItems = ProductList.map((product) =>
    <ProductCard key={product.id} {...product}   ></ProductCard>
    );
    return (
        <div  >
            <h2>Latest Offers</h2>

            <div  className={classes.gridFit}> {listItems} </div>,
        </div>
    )

}