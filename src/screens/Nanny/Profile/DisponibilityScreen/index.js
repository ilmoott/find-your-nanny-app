import React, {useState} from 'react';
import { Text } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import BoxDisponibility from '../../../../components/BoxDisponibility.js'
import GenericButton from '../../../../components/GenericButton.js'
import { Container,   
         TextTitle } from './styles'; 
  
         disponibility = {
            data: [
            { key: "00", 
              description: "Monday - Thursday",  
              interval: "8:00am - 4:00pm"}, 

            { key: "01", 
              description: "Saturday - Sunday",  
              interval: "3:00pm - 8:00pm"}, 
    
            { key: "02", 
              description: "Fryday - Fryday", 
              interval: "3:00pm - 12:00pm"}, 

        
            ]
        };      

export default () => {


const navigation = useNavigation();

const handleClickNewRange = () => {
     
    alert('NewRange')
    
}     

return (
    <Container>
 
        {this.disponibility.data.map((item, index) => {
            return (  
                <BoxDisponibility key={index} 
                                 description={item.description}
                                  interval={item.interval}/>
            );
            })}

         

        <GenericButton onPress={handleClickNewRange} 
                        text="New Range"  
                        color='#FFFFFF' 
                        backgroundColor='#3EC5F0'
                        borderColor='#3EC5F0'/>                     
        
  
    </Container>
);
}