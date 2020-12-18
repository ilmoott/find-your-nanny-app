import React, {useState} from 'react';
import {TabRouter, useNavigation} from '@react-navigation/native' 
import { Text } from 'react-native';
import { Container,
         HeaderArea,
         ButtonBackArea,
         TitleArea,
         TextTitle,
         BodyArea,
         TitleBodyArea, 
         ListPersonalData,
         PhotoArea,
         DataArea,
         ButtonPhoto,
         FooterArea 
         } from './styles';

import NavPrevIcon from '../../../../assets/nav_prev.svg';
import PhotoIcon from '../../../../assets/PhotoArea.svg';
 
import ButtonNext from '../../../../components/ButtonNext'
import Camera from '../../../../components/Camera'

import MemoBox   from '../../../../components/MemoBox' 
import TextBox   from '../../../../components/TextBox' 

export default () => {

    const [biography, setBiography] = useState(''); 
    const [interested, setInterested] = useState(''); 
    const [openCamera, setOpenCamera] = useState(false); 
    
    const navigation = useNavigation();

    const handleClickBack = () => {
         
        navigation.navigate('Profile1');
        
    }  

    const setPhoto = () => {
         
        navigation.navigate('CameraScreen'); 
        
    }  
 
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
                        <PhotoIcon/>
                        <ButtonPhoto onPress={setPhoto}>
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


                        <Text
                            style={{ 
                                fontWeight:'bold'
                                }}
                        >
                            Interested</Text>

                        <TextBox    
                            large='90%' 
                            placeholder="Interested"
                            value={interested}
                            onChangeText={t=>setInterested(t)} // isso permite alterar o texto no text
                            password={false}
                        />  

                    </DataArea>

                    
                 </ListPersonalData>

                
            </BodyArea>

            <FooterArea>
                <ButtonNext/>
            </FooterArea>


        </Container>
    );
}