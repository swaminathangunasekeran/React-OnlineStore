import React from 'react';
import classNames from "classnames";

import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Food from 'mdi-material-ui/Food';
import Icon from '@mdi/react';
import { mdiMenuDownOutline } from '@mdi/js';
import { mdiAtlassian } from '@mdi/js';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:"white"
  },
  title: {
    flexGrow: 1,
    color:"white"
  },
  transParent:{
      background:"transparent",
      boxShadow: "none"
  },
  bgThemeColor:{
    background:"black",
    top:"0px !important"
  },
  lightColor:{
    color:"white"
  },
  topAuto:{
    top: "auto"
  },
  marginRight80:{
      marginRight:"80px"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  let currentMenu = false;
  window.addEventListener("scroll", headerColorChange);
  const appBarClasses = classNames({
    [classes.transParent]: true,
    [classes.topAuto] : true
  });
  const MenuClasses = classNames({
    [classes.lightColor] : true,
    [classes.marginRight80]:true
  })

  function handleClick  (event) {
    currentMenu  = event.currentTarget;
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function getCurrentTarget  (currentElement) {
  
    return (anchorEl && currentElement === anchorEl.id) ? true : false;
  
  }

  function  headerColorChange (){
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > 100) {
        document.body
          .getElementsByTagName("header")[0]
          .classList.remove(classes["transParent"]);
        document.body
          .getElementsByTagName("header")[0]
          .classList.add(classes["bgThemeColor"]);
      } else {
        document.body
          .getElementsByTagName("header")[0]
          .classList.add(classes["transParent"]);
        document.body
          .getElementsByTagName("header")[0]
          .classList.remove(classes["bgThemeColor"]);
      }
  }

  return (
    <div className={classes.root}>
      <AppBar className = {appBarClasses} position="fixed">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
         <Link to="/shoelaces">

         <Icon path={mdiAtlassian}
                title="AllSize"
                size={3}
                color="white"
                />
          

         </Link>
         
         <Typography variant="h6" className={classes.title}>
            AllSize
          </Typography>
          
          <Button id="men-menu-button" className = {MenuClasses}  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            
            <Icon path={mdiMenuDownOutline}
                title="AllSize"
                size={1}
                color="white"
                />
            Men
          </Button>
            <Menu
                id="men-menu"
                anchorEl={anchorEl}
                keepMounted
                open={getCurrentTarget("men-menu-button")}
                onClose={handleClose}
                className={classes.title}
            >
                <MenuItem onClick={handleClose}>Shirt</MenuItem>
                <MenuItem onClick={handleClose}>Trousers</MenuItem>
                <MenuItem onClick={handleClose}>WinterWear</MenuItem>
            </Menu>
            <Button id="women-menu-button" className = {MenuClasses} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                
            <Icon path={mdiMenuDownOutline}
                title="AllSize"
                size={1}
                color="white"
                />
                Women
            </Button>
            <Menu
                id="women-menu-button"
                anchorEl={anchorEl}
                keepMounted
                open={getCurrentTarget("women-menu-button")}
                onClose={handleClose}
                
            >
                <MenuItem onClick={handleClose}>Tops</MenuItem>
                <MenuItem onClick={handleClose}>Trousers</MenuItem>
                <MenuItem onClick={handleClose}>WinterWear</MenuItem>
            </Menu>
            <Button id="unisex-menu-button" className = {MenuClasses}  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                
            <Icon path={mdiMenuDownOutline}
                title="AllSize"
                size={1}
                color="white"
                />
                Unisex
          </Button>
            <Menu
                id="unisex-menu"
                anchorEl={anchorEl}
                keepMounted
                open={getCurrentTarget("unisex-menu-button")}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Unisex Tops</MenuItem>
                <MenuItem onClick={handleClose}>Unisex Trousers</MenuItem>
                <MenuItem onClick={handleClose}>Unisex WinterWear</MenuItem>
            </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}