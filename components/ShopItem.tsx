import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from './Card'


export interface Props {
  id: number;
  itemName: string;
  itemPrice: number;
  discount: number;
  itemImages: ImageSourcePropType[]
}

const ShopItem: React.FC<Props> = (props) => {
  const { itemName, itemPrice, discount, itemImages } = props;
  const image = itemImages?.[0]
  return (
    <Card>
      {
        (style) => (
          <View style={{ ...style, ...styles.container }}>
            <Image style={styles.image} source={image} />
            <Text style={styles.itemName}>{itemName}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{itemPrice}Br</Text>
              <Text style={styles.discount}>{discount}%</Text>
            </View>
          </View>
        )
      }
    </Card>
  )
}

export default ShopItem

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    height: 176,
  },
  image: {
    width: 150,
    height: "60%",
    borderRadius: 8,
  },
  itemName: {
    textAlign: 'center',
    fontSize: 17,
  },
  price: {
    fontWeight: "bold",
    color: 'black'
  },
  discount: {
    backgroundColor: "green",
    borderRadius: 5,
    textAlign: "center",
    color: 'white',
    padding: 3
  },
  priceContainer: {
    width: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center',
    marginBottom: 20
  }

})
