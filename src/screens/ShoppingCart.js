import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartListItem from '../components/CartListItem'
import { useSelector } from 'react-redux'
import { selectDeliveryPrice, selectSubtotal, selectTotal } from '../store/cartSlice'

const ShoppingCart = () => {

  const { items } = useSelector(state => state.cart)

  const ShoppingCartTotal = () => {

    const subtotal = useSelector(selectSubtotal)
    const deliveryFee = useSelector(selectDeliveryPrice)
    const total = useSelector(selectTotal)

    return(
      <View style={styles.totalsContainer}>
        <View style={styles.row}>
          <Text style={styles.text}>Subtotal</Text>
          <Text style={styles.text}>{subtotal} US$</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Delivery</Text>
          <Text style={styles.text}>{deliveryFee} US$</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textBold}>Total</Text>
          <Text style={styles.textBold}>{total} US$</Text>
        </View>
      </View>
    )
  }

  return (
    <>
      <FlatList
        data={items}
        renderItem={({item}) => (<CartListItem cartItem={item}/>)}
        ListFooterComponent={ShoppingCartTotal}
      />
      <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
    
  )
}

export default ShoppingCart

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: 'gainsboro',
    borderTopWidth: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2
  },
  text: {
    fontSize: 16,
    color: 'gray'
  },
  textBold: {
    fontSize: 16,
    fontWeight: '500'
  },
  button: {
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 30,
    alignSelf: 'center',
    width: '90%',
    padding: 15,
    borderRadius: 100,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16
  }
})  