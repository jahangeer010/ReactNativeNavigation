import { View, Text ,FlatList} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

export default function ViewCart(navigation) {
  const products=useSelector(state=>state.cart)
    return (
    <View>
      <FlatList data={products} renderItem={(element)=>{
        return (
          <>
          <View><Text>{element.item.title}</Text></View>
          
          </>
        )

      }}/>
{products.map(product=>(
        <div>
        <h5>{product.title}</h5>

        </div>
    ))}

    </View>
  )
}