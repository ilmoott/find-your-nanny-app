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
     
        <MapView
            style={ styles.map }
            initialRegion={{
              latitude: 40.71939,
              longitude: -73.99014,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
        >
                <Marker
                    coordinate={{
                      latitude: 40.71939,
                      longitude: -73.99014,
                    }}
                    title='Emma Sores'
                    description='80 Delancey St, New York, NY, 10002, USA'
                    icon={{ uri: 'https://i.ibb.co/KrnXvG7/Pngtree-baby-pregnant-baby-baby-baby-png-image-426384-removebg-preview.png'}} 

                
                
                />
          </MapView> 
 
    )
}
 