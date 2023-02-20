import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import React from 'react'
import products from '../data/products';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { productsSlice } from '../store/productSlice';

const ProductScreen = () => {

  const navigation = useNavigation()
  const dispatch = useDispatch()
  const products = useSelector(state => state?.products?.products)

  return (
    <FlatList
        data={products}
        numColumns={2}
        renderItem={({item}) => (
          <Pressable 
            style={styles.itemContainer}
            onPress={() => {
              dispatch(productsSlice.actions.setSelectedProduct(item?.id))
              navigation.navigate('ProductDetail')
            }}
          >
            <Image
              source={{uri: item?.image}}
              style={styles.image}
            />
          </Pressable>
        )}
    />
  )
}

export default ProductScreen

const styles = StyleSheet.create({
    itemContainer: {
        width: '50%',
        padding: 2
    },
    image: {
        width: '100%',
        aspectRatio: 1
    }
})