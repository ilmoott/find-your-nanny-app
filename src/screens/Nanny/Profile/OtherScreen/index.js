import React, {useState} from 'react';
import { Text } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { Container,   
         TextTitle } from './styles'; 
  

export default () => {


const navigation = useNavigation();

return (
    <Container>
 

        <TextTitle>Others</TextTitle> 
        


    </Container>
);
}