import MapView, {Marker} from 'react-native-maps';
import React,{useState} from 'react';

import{
    Component,
    StyleSheet,
  } from 'react-native';

import styled from 'styled-components/native';
import { View } from 'react-native';
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
});


export default () => {
 

    return ( 
    
      <View style={styles.container}>
        <MapView
            style={ styles.map }
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4384,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
        >
                <Marker
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324 
                    }}
                    title='Emma Sores'
                    description='80 Delancey St, New York, NY, 10002, USA'
                    icon={{ uri: 'https://img.icons8.com/plasticine/1x/baby.png'}}
                
                />
          </MapView>
      </View>
 
    )
}
 