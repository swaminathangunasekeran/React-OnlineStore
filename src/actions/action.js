let cartid = 0
export const ADD_TODO = "ADD_TODO";
export const INCR_QTY = "INCR_QTY";
export const DECR_QTY = "DECR_QTY";


export const addToCart = product => ({
  type: ADD_TODO,
  id: cartid++,
  product
})


export const incrementQuantity = product => ({
  type: INCR_QTY,
  product
})

export const decrementQuantity = product => ({
  type: DECR_QTY,
  product
})