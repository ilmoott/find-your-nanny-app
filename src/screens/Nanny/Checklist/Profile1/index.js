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
 
import ButtonNext from '../../../../components/ButtonNext'

export default () => {

    const navigation = useNavigation();

    const handleClickBack = () => {
         
        navigation.navigate('Documentation');
        
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

                    <Text style={{color:'#5F9CAF', fontSize:24, fontWeight: 'bold'}}>Personal </Text>
                    <Text style={{color:'#5F9CAF', fontSize:24}}>data</Text>

                </TitleBodyArea>

                
            </BodyArea>

            <FooterArea>
                <ButtonNext/>
            </FooterArea>


        </Container>
    );
}