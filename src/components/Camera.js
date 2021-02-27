import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, ImageBackground, ScrollView, View,  PermissionsAndroid } from "react-native";
import { RNCamera } from "react-native-camera";
import Icon from "react-native-vector-icons/FontAwesome";
import styled from 'styled-components/native';
import ButtonTakePic from '../assets/ButtonTakePic.svg'
import CameraRoll from '@react-native-community/cameraroll'

const Container = styled.SafeAreaView` 
    flex: 1; 
`;

const CameraArea = styled.View`  
`;


const Footer = styled.View` 
    align-items:center;
    justify-content:center;
    background-color:#000000;
    padding: 10px;  
`;

const FooterBootom = styled.TouchableOpacity` 
    align-items:center;
    justify-content:center;
    background-color:#000000;
    padding: 10px; 
    border-radius: 50px;
    width: 15%;
`;


export default Camera = () => {
  const [imageUri, setImageUri] = useState(null);
  takePicture = async () => {
    try {
      if (this.camera) {
        const options = {
          quality: 1,
          base64: true,
          forceUpOrientation: true,
          fixOrientation: true
        };
        const { uri } = await this.camera.takePictureAsync(options);
        setImageUri(uri);
      }
    } catch (err) {
      alert(err.message);
    }
  }

  submitPicture = async () => {
    try {

        const checkAndroidPermission = async () => {
          try {
            const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
            await PermissionsAndroid.request(permission);
            Promise.resolve();
          } catch (error) {
            Promise.reject(error);
          }
      };
      
      const savePicture = async () => {
          if (Platform.OS === 'android'){
            await checkAndroidPermission();
          }
        alert(imageUri)
        CameraRoll.save(imageUri);
      };


      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          "title": "Access Storage",
          "message": "Access Storage for the pictures"
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) { 
        console.log("Entrando na Camera.");
        await savePicture()
      } else {
        console.log("Permissao de camera negada.");
      }
    } catch (err) {
      console.warn(err);
    }

    setImageUri(null);
  }

  return (
 
    <Container>

      {imageUri ?
        <ImageBackground style={styles.preview} source={{ uri: imageUri }}>
          <ScrollView></ScrollView>
          <View style={styles.buttonsPreview}>
            <Icon name="times" size={45} color="#fff" onPress={() => setImageUri(null)} />
            <Icon name="check" size={45} color="#fff" onPress={() => submitPicture()} />
          </View>
        </ImageBackground>
        : 
          <RNCamera
            ref={camera => { this.camera = camera; }}
            style={styles.camera}
            type={RNCamera.Constants.Type.front}
            // autoFocus={RNCamera.Constants.AutoFocus.on}
            flashMode={RNCamera.Constants.FlashMode.off}
            // permissionDialogTitle={"Permission to use camera"}
            // permissionDialogMessage={"We need your permission to use your camera phone"}
          > 

          </RNCamera>
    }

    {!imageUri &&      
      <Footer>
        <FooterBootom onPress={takePicture}>
            <ButtonTakePic/>
        </FooterBootom>
      </Footer>
    }
      
    </Container>
  )

}
const styles = StyleSheet.create({
  camera: {
    flex: 1
  }, 
  preview: {
    width: "100%",
    height: "100%",
    flex: 1
  },
  buttonsPreview: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5
  }
});