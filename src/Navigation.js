import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from './screens/ProductScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import ShoppingCart from './screens/ShoppingCart';
import { FontAwesome5 } from '@expo/vector-icons'
import { useSelector } from 'react-redux';
import { selectNumberOfItems } from './store/cartSlice';

const Stack = createNativeStackNavigator();

const Navigation = () => {

  const numberOfItems = useSelector(selectNumberOfItems)

  return (
    <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerTitleAlign: 'center',
            contentStyle: {
              backgroundColor: 'white'
            }
          }}
          >
            <Stack.Screen 
              name='Product' 
              component={ProductScreen}
              options={({navigation}) => ({
                headerRight: () => <Pressable onPress={() => navigation.navigate('Cart')} style={{flexDirection: 'row'}}>
                  <FontAwesome5
                    name='shopping-cart'
                    size={18}
                    color='gray'
                  />
                  <Text style={{marginLeft: 5,fontWeight: '500'}}>{numberOfItems}</Text>
                </Pressable>
              })}
            />
            <Stack.Screen name='ProductDetail' component={ProductDetailScreen}/>
            <Stack.Screen name='Cart' component={ShoppingCart} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation