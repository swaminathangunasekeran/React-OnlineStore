import {connect} from "react-redux";
import {addToCart,incrementQuantity,decrementQuantity} from "actions/action";
import FloatingCart from "views/cart/FloatingCart"



const isproductInCart = (cartList,product) => { 
  
    const prodIndex = find(cartList,(cartProduct) => { return cartProduct.id === product.id});
    return prodIndex;
    
}


const mapStateToProps = (state,ownProps) => {
  
    return {
      productsInCart: state.cart
    }
    
  }
  
  const mapDispatchToProps = (dispatch,ownProps) => {
          
        return {
          addToCart: product =>{
             dispatch (addToCart(ownProps.product))
          },
          incrementQuantity:product => {
            dispatch(incrementQuantity(ownProps.product))
          } ,
          decrementQuantity:product => {
            dispatch(decrementQuantity(ownProps.product))
          }   

        }
     
    
  }

export default connect(mapStateToProps,mapDispatchToProps)(FloatingCart)