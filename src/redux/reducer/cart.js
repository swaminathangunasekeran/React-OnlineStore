import {ADD_TODO,INCR_QTY,DECR_QTY} from "actions/action"
import find  from 'lodash/find';
import findIndex  from 'lodash/findIndex';
import fill  from 'lodash/fill';
import pullAllBy from "lodash/pullAllBy";

export const cart = (state =[] ,action ) => {
    // console.log("ACTION",action.type,action.product,ADD_TODO);
    switch (action.type){
        case ADD_TODO :
           
            let product = {...action.product,quantity:1}
           
            return [...state,product];
        break;
        case INCR_QTY:
                let currentProduct = action.product;
                let quanityproduct = find(state,(item)=>item.id === currentProduct.id);
                let quantityIndex = findIndex(state,(item)=>item.id === currentProduct.id);
                let incrmentQuantity = {...quanityproduct,quantity:quanityproduct.quantity+1 }
                fill(state,incrmentQuantity, quantityIndex, quantityIndex+1)
                // return fill(state,incrmentQuantity, quantityIndex, quantityIndex+1)
                return [...state]
                // let incrProduct = {...action.product,quantity:currentProduct.quantity}
                
                // return [...state,incrProduct];
        break;
        case DECR_QTY:
                let decrProduct = action.product;
                let decrquanityproduct = find(state,(item)=>item.id === decrProduct.id);
                let decrquantityIndex = findIndex(state,(item)=>item.id === decrProduct.id);
                let decrQuantity = {...decrquanityproduct,quantity:decrquanityproduct.quantity-1 }
                if(decrQuantity.quantity > 0){
                    fill(state,decrQuantity, decrquantityIndex, decrquantityIndex+1) // dont remove this
                    return [...state]
                }else{
                    pullAllBy(state,[action.product],"id")
                    return [...state];
                }
                
                // return fill(state,incrmentQuantity, quantityIndex, quantityIndex+1)
                
                // let incrProduct = {...action.product,quantity:currentProduct.quantity}
                
                // return [...state,incrProduct];
        break;

        default:
            return state;    
    }
}



