import React from 'react';
import {useNavigation} from '@react-navigation/native'
import { StyleSheet, Text } from 'react-native';
import { Container,
         MapArea,
         ButtonBackArea, 
         TextTitle,
         TextSubtitle,
         BodyArea,
         CheckPointArea,
         FooterArea,
         MiniTitle,
         ScrollArea,
         PriceArea,
         PriceHour,
         PriceTotal 
         } from './styles';

import NavPrevIcon from '../../../assets/nav_prev.svg';

import GenericButton from '../../../components/GenericButton.js';
import CallOnParentButton from '../../../components/CallOnParentButton.js';
import CheckpointChecked from '../../../components/CheckpointChecked.js';
import Map from '../../../components/Map.js';
 
import MapView, {Marker} from 'react-native-maps'


const styles = StyleSheet.create({
    mapStyle:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
}); 

export default () => {

    const navigation = useNavigation();

    const handleClickBack = () => {
         
        navigation.navigate('Shedule');
        
    }     

    checkpoints = {
        data: [
        { key: "00", 
          text: "Incoming | 10h00 am"  }, 
    
        { key: "01", 
        text: "Leave | 14h00 pm" },

        { key: "03", 
        text: "Incoming | 16h00 am"  }, 
      
        { key: "04", 
        text: "Leave | 20h00 pm" }
    
        ]
    };      
    
 

    return (
        <Container> 
                
            <MapArea>
                <ButtonBackArea onPress={handleClickBack}>
                    <NavPrevIcon fill="#FFFFFF"/>  
                </ButtonBackArea>


            </MapArea>

            <Map/>

            <ScrollArea>

                <BodyArea>

                    <TextTitle>Work in Emma Soares</TextTitle>
                    <TextSubtitle>80 Delancey St, New York, NY</TextSubtitle>
                    <TextSubtitle>10002, USA</TextSubtitle>

                    <CallOnParentButton text="Call on parent"
                                    color="#3EC5F0"
                                    borderColor="#3EC5F0"/>

                    <CheckPointArea>
                        <MiniTitle>Check points</MiniTitle>

                        {this.checkpoints.data.map((item, index) => {
                        return ( 
                            <CheckpointChecked key={index}  
                                    text={item.text}/>  
                        );
                        })}
                    </CheckPointArea>

                    <FooterArea>
                        <GenericButton text="I'm Here" 
                                       color='#FFFFFF'
                                       backgroundColor='#3EC5F0'
                                       borderColor='#3EC5F0'/>  
                    </FooterArea>


                    <PriceArea>
                        <TextSubtitle>Amount</TextSubtitle>
                        <PriceTotal>$ 80,00</PriceTotal>
                        <PriceHour>$ 20/h</PriceHour>

                        <FooterArea>

                            <GenericButton text="Cancel Job" 
                                            color='#FFFFFF'
                                            backgroundColor='#EF5350'
                                            borderColor='#EF5350'/>   

                        </FooterArea>
                       
                    </PriceArea>


                </BodyArea>
            </ScrollArea>

        </Container>
    );
}