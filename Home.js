import { View, Text,Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from './cartSlice'
import { useSelector } from 'react-redux'

export default function Home({navigation}) {
  const dispatch=useDispatch()
  const [productss,SetProducts]=useState([])
  useEffect(()=>{
      const fetchProducts=async()=>{
              const res=await fetch("https://fakestoreapi.com/products");
              const data=await res.json();
              
              SetProducts(data)
          }   
      fetchProducts()

  },[])
const handleAdd=(product)=>{
  dispatch(add(product))

}
const items=useSelector((state)=>state.cart)


  return (
    <View>
      <Button title={"Click to View "}  onPress={()=>navigation.navigate("ViewCart")}></Button>
      <Text>WEllcome to Home and you have selected {items.length}Products</Text><br/>
      {productss.map((product)=>{
        return(
            <>
         <div key={product.id}>
            {product.title}<br/>
            <br/>{product.id}
           
              <button onClick={()=>{dispatch(add(product))}}>Add to CART</button>
            
            </div>
            </>
        )
        
    })}
    
    </View>
  )
}