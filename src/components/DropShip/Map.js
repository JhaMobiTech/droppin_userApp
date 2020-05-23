import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView from '../map/'
const Map = (props) => {
  return (
    <View style={{flex:1}}>
      <MapView />
    </View>
  )
}

export default Map

const styles = StyleSheet.create({})
