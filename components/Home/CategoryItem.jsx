import { View, Text, Image, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { TouchableOpacity } from 'react-native'

export default function CategoryItem({category, onCategoryPress}) {
  return (
    <TouchableOpacity onPress={() => onCategoryPress(category)}>
      <View style={{
        padding: 15,
        backgroundColor: Colors.ICON_BG,
        borderRadius: 99,
        marginRight: 30,
      }}>
        <Image source={{uri: category.icon}}
          style={{
            height: 40,
            width: 40,
          }}
        />
      </View>
      <Text style={{
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'outfit-medium',
      }}>
        {category.name}
      </Text>
    </TouchableOpacity>
  )
}