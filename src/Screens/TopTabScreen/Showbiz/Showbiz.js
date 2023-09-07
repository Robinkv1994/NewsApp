import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native';


const Showbiz = () => {
  const route = useRoute()
  const searchText = route.params?.searchText
  return (
    <View>
      <Text>{searchText}</Text>
    </View>
  )
}

export default Showbiz

const styles = StyleSheet.create({})