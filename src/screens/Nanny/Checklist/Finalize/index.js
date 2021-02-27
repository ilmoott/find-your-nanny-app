import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native' 
import { Text } from 'react-native';
import { Container,
         HeaderArea,
         AvatarArea, 
         TextArea, 
         FooterArea 
         } from './styles';


import Avatar from '../../../../assets/finalize_avatar.svg';
 
import ButtonNext from '../../../../components/ButtonNext' 
export default () => {
 
    
    const navigation = useNavigation();

    const handleClickBack = () => {
         
        navigation.reset({
            routes: [{name: 'MainTabNanny'}] // Como eu sei que isso é uma rota??
        });
        
    } 
 
     
 
    return (
        <Container>

            <HeaderArea>
               
                <Text style={{color:'#5F9CAF', fontSize:34, textAlign: 'center'}}>We will analyze your profile </Text> 

            </HeaderArea>

            <AvatarArea>
                <Avatar/>
            </AvatarArea>

            <TextArea>

                <Text style={{color:'#5F9CAF', fontSize:16, textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                                                                  sed do eiusmod tempor incididunt ut labore 
                                                                                  et dolore magna aliqua. </Text> 
            </TextArea>
 

            <FooterArea>
                <ButtonNext onPress={handleClickBack} text="Back to init"/>
            </FooterArea>


        </Container>
    );
}