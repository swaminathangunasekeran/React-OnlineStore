import CartButton from "components/CartButton";
import { connect } from 'react-redux';
import {addToCart,incrementQuantity,decrementQuantity} from "actions/action";
import find  from 'lodash/find'


const isproductInCart = (cartList,product) => { 
  
    const prodIndex = find(cartList,(cartProduct) => { return cartProduct.id === product.id});
    return prodIndex;
    
}


const mapStateToProps = (state,ownProps) => {
  
    return {
      isproductInCart: isproductInCart(state.cart ,ownProps.product )
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

export default connect(mapStateToProps,mapDispatchToProps) (CartButton)