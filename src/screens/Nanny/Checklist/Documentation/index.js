import React from 'react';
import {useNavigation} from '@react-navigation/native'
import { Text } from 'react-native';
import { Container,
         HeaderArea,
         ButtonBackArea,
         TitleArea,
         TextTitle,
         BodyArea,
         TitleBodyArea, 
         ListCertificationsArea,
         FooterArea 
         } from './styles';

import NavPrevIcon from '../../../../assets/nav_prev.svg';

import ItemChecked from '../../../../components/ItemChecked.js';


import ButtonNext from '../../../../components/ButtonNext'

export default () => {

    const navigation = useNavigation();

    const handleClickBack = () => {
         
        navigation.navigate('MainTabNanny');
        
    }    

    const handleClickNext = () => {
          
        navigation.navigate('Profile1');
        
    }        

    return (
        <Container>

            <HeaderArea>

                <ButtonBackArea onPress={handleClickBack}>
                    <NavPrevIcon fill="#FFFFFF"/>  
                </ButtonBackArea>
                
                <TitleArea>
                    <TextTitle>Checklist</TextTitle>
                </TitleArea>

            </HeaderArea>

            <BodyArea>

                <TitleBodyArea>

                    <Text style={{color:'#5F9CAF', fontSize:24}}>Select your documentation</Text>

                </TitleBodyArea>

                <ListCertificationsArea>

                    <ItemChecked text="Police Check"/> 
                    <ItemChecked text="Vaccination"/> 
                    <ItemChecked text="First Aid"/> 
                    <ItemChecked text="Home Care"/> 

                    <ItemChecked text="Item A"/>  
                    <ItemChecked text="Item B"/>  
                    <ItemChecked text="Item C"/>  
                    <ItemChecked text="Item D"/>  
                    <ItemChecked text="Item E"/>  
                    <ItemChecked text="Item F"/>  
                    <ItemChecked text="Item G"/>  
                    <ItemChecked text="Item H"/>  
                

                </ListCertificationsArea>


            </BodyArea>

            <FooterArea>
                <ButtonNext onPress={handleClickNext}/>
            </FooterArea>


        </Container>
    );
}