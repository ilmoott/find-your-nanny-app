import React, {useState, useEffect, useRef} from 'react';
import { useNavigation} from '@react-navigation/native'
import {Modalize} from 'react-native-modalize'
import { Text, Platform, Image, PermissionsAndroid, View, Button } from 'react-native'; 
import { Container,
         HeaderArea,
         ButtonBackArea,
         TitleArea,
         TextTitle,
         BodyArea,
         TitleBodyArea, 
         ListPersonalData,
         IconArea,
         PhotoArea,
         DataArea,
         ButtonPhoto,
         FooterArea 
         } from './styles';

import NavPrevIcon from '../../../assets/nav_prev.svg';
import PhotoIcon from '../../../assets/PhotoArea.svg';

import GenericButton from '../../../components/GenericButton'
import BoxChangePassword from '../../../components/BoxChangePassword'

import MemoBox   from '../../../components/MemoBox'
import TextBox   from '../../../components/TextBox'

import * as ImagePicker from 'expo-image-picker';


export default () =>  {

    const modalizeRef = useRef(null);

    function onOpen(){
        modalizeRef.current?.open()
    }

    const [biography, setBiography] = useState(''); 
    const [interested, setInterested] = useState('');  
    const [avatar, setAvatar] = useState();
    
    const navigation = useNavigation();

    const handleClickBack = () => {
         
        navigation.navigate('Profile');
        
    }  

    const handleClickNext = () => {
          
        navigation.navigate('Finalize');
        
    }        

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);
    
    
    const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
    }) 

    if (!result.cancelled) {
        setAvatar(result.uri);
    }

    };

    
    const pickCamera = async () => {
 
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            base64: true,
            allowsEditing: false, 
            quality: 1 
        })

         
        if (!result.cancelled) {
            setAvatar(result.uri);
        }
    
        };
    
    return (
        <Container>

            <HeaderArea>

                <ButtonBackArea onPress={handleClickBack}>
                    <NavPrevIcon fill="#FFFFFF"/>  
                </ButtonBackArea>
                
                <TitleArea>
                    <TextTitle>Profile</TextTitle>
                </TitleArea>

            </HeaderArea>

            <BodyArea>

                <TitleBodyArea>

                    <Text style={{color:'#5F9CAF', fontSize:24, fontWeight: 'bold'}}>Profile </Text>
                    <Text style={{color:'#5F9CAF', fontSize:24}}>data</Text>

                </TitleBodyArea>

                <ListPersonalData>

                    <PhotoArea>  
                        <IconArea onPress={pickImage}>  
                            {avatar && 
                            
                            <Image source={{ uri: avatar }} style={{ width: 120, height: 120, borderRadius: 100 }} />
                                                        
                            }

                            {!avatar &&

                            <PhotoIcon/>
                            
                            } 
                            
                        </IconArea>   
                        <ButtonPhoto onPress={pickCamera}>
                            <Text
                                style={{ 
                                    fontWeight:'bold',
                                    color:'#3EC5F0'
                                    }}
                            >
                                Set Photo</Text>

                        </ButtonPhoto>
                        

                    </PhotoArea>

                    <DataArea>

                        <MemoBox    
                            large='90%' 
                            placeholder="Your biography"
                            value={biography}
                            onChangeText={t=>setBiography(t)} // isso permite alterar o texto no text
                            password={false}
                        /> 

                    </DataArea>

                    
                 </ListPersonalData>

            </BodyArea>

            <FooterArea>

                <GenericButton onPress={onOpen}
                               text="Change Password"
                               color='#3EC5F0'
                               backgroundColor='#FFFFFF'
                               borderColor='#3EC5F0'/>


                <GenericButton onPress={handleClickNext}
                               text="Save Editions"
                               color='#FFFFFF'
                               backgroundColor='#3EC5F0'
                               borderColor='#FFFFFF'/>
            </FooterArea>

            <Modalize
                ref={modalizeRef}
                snapPoint={600}
            >

                <BoxChangePassword/>

            </Modalize>


        </Container>
    );
}