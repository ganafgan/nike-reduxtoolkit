import { 
    FlatList, 
    Image, 
    StyleSheet, 
    Text, 
    View, 
    useWindowDimensions, 
    ScrollView,
    Pressable 
} from 'react-native'
import React from 'react'
import products from '../data/products'
import { useSelector, useDispatch } from 'react-redux'
import { cartSlice } from '../store/cartSlice'

const ProductDetailScreen = () => {

    const product = useSelector(state => state.products.selectedProduct)
    const dispatch = useDispatch()

    const { height, width } = useWindowDimensions()

    const addToCart = () => {
        dispatch(cartSlice.actions.addCartItem({product: product}))
    }

    return (
        <View>
            <ScrollView>

                {/* Image Carousel */}
                <FlatList
                    data={product.images}
                    renderItem={({item}) => (
                        <Image 
                            source={{uri: item}}
                            style={{width: width, aspectRatio:1}}
                        />
                    )}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                />
                
                <View style={{padding: 20}}>
                    {/* Title */}
                    <Text style={styles.title}>{product?.name}</Text>
                    
                    {/* Price */}
                    <Text style={styles.price}>{product?.price}</Text>

                    {/* Description */}
                    <Text style={styles.description}>{product?.description}</Text>
                </View>
            </ScrollView>

            {/* Add to cart button */}
            <Pressable 
                onPress={addToCart}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Add to cart</Text>
            </Pressable>
            
            {/* Navigation icon */}
            

        </View>
    )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: '500',
        marginVertical:10
    },
    price: {
        fontWeight: '500',
        fontSize: 16
    },
    description: {
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 30,
        fontWeight: '300'
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