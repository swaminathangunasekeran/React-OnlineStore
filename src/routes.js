
import Home from "./views/Home/Home";
import ProductDetails from "./views/productDetails/productDetails";
import Payment from "./views/Payment/payment"

export default [
    {
      path: "/home",
      component: Home
    },
    {
        path:"/productDetails",
        component: ProductDetails,
        exact:true,
    },{
        path:"/productDetails/:id",
        component: ProductDetails
    },{
      path:"/payment/:id",
      component: Payment
    }

    
  ]