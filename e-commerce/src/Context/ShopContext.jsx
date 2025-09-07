import React, { createContext, useState } from 'react'
import all_product from "../Components/Images/all_product";

export let ShopContext = createContext(null);

let getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
      cart[index] = 0;
    }
    return cart;
  }

const ShopContextProvider = (props) => {

  let [cartItems, setCartItems] = useState(getDefaultCart());

  // console.log(cartItems);
  let addToCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    console.log(cartItems);
  }

  let removeFromCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

  let getTotalCartAmount = ()=>{
    let totalAmount = 0;
    for(const item in cartItems){
       if(cartItems[item]>0){
        let itemInfo = all_product.find((product)=>product.id=== Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
       }
       return totalAmount;
    }
  }

  let getTotalCartItems = ()=>{
    let totalItem = 0;
    for(let item in cartItems){
      if(cartItems[item]>0){
        totalItem += cartItems[item];
      }
      return totalItem;
    }
  }

  let contextValue = {getTotalCartItems,getTotalCartAmount,all_product, cartItems, addToCart , removeFromCart};

  return(
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;