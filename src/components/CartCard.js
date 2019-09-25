import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import CartAction from "container/CartActionButton";

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    padding:"10px"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function CartCard(props) {
  const classes = useStyles();
  const theme = useTheme();
  const prodDetails = {
    id:props.id,
    img:props.img,
    title:props.title,
    price:props.price
 }
  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          {props.price}
          </Typography>
        </CardContent>
        <CartAction product={prodDetails}></CartAction>
      </div>
      <CardMedia
        className={classes.cover}
        image= {props.img}
        title="Live from space album cover"
      />
    </Card>
  );
}