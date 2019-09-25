import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import { mdiCartPlus } from '@mdi/js';
import Icon from '@mdi/react';
import Redirect from "react-router-dom";
import CartAction from "container/CartActionButton";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin:"10px"
  },
  media: {
    height: 340,
    backgroundSize: "contain"
  },
});

function ProductCard(props) {
  const classes = useStyles();
  // const [productDetails, setProductDetails] = React.useState(0);
  const prodDetails = {
    id:props.id,
    img:props.img,
    title:props.title,
    price:props.price
 }
 // const [productDetails, setProductDetails] = React.useState(prodDetails);

   function navToProdDetails (id) {
   //props.history.push(`/productDetails/${id}`)

  

   props.history.push( {
    pathname: `/productDetails/${id}`,
    state: { detail: prodDetails }
  })

   // const prodDetails = `/productDetails/${id}`
   // setProductDetails(id)
   }

 
  
      return (
        <Card cardid={props.id}  className={classes.card}>
        <CardActionArea onClick= {(e) => {
          e.stopPropagation();
          e.preventDefault();
          e.nativeEvent.stopImmediatePropagation();
        navToProdDetails(props.id)
        }
        }>
          <CardMedia
            className={classes.media}
            image={props.img}
            title={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        
        <CardActions>
            
        <CartAction product={prodDetails}/>
          {/* <Button size="small" color="primary">
            Share
          </Button> */}
          {/* <Button variant="contained" size="small" color="secondary">
          <Icon path={mdiCartPlus}
                title="AllSize"
                size={1}
                color="white"
                />
            Cart
          </Button> */}
        </CardActions>
      </Card>
      )
   }

   
  


export default withRouter(ProductCard);
// export default MediaCard;