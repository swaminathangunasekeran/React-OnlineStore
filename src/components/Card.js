import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom'
import Redirect from "react-router-dom";

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

function MediaCard(props) {
  const classes = useStyles();
  // const [productDetails, setProductDetails] = React.useState(0);

   function navToProdDetails (id) {
   //props.history.push(`/productDetails/${id}`)

   const prodDetails = {
      id:props.id,
      img:props.img,
      title:props.title,
      price:props.price
   }

   props.history.push( {
    pathname: `/productDetails/${id}`,
    state: { detail: prodDetails }
  })

   // const prodDetails = `/productDetails/${id}`
   // setProductDetails(id)
   }

 
  
      return (
        <Card cardid={props.id} onClick= {() => navToProdDetails(props.id) } className={classes.card}>
        <CardActionArea>
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
          {/* <Button size="small" color="primary">
            Share
          </Button> */}
          <Button size="small" color="primary">
            More
          </Button>
        </CardActions>
      </Card>
      )
   }

   
  


export default withRouter(MediaCard);
// export default MediaCard;