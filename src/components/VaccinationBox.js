import React from 'react';
import styled from 'styled-components/native';
import VaccinationIcon from '../assets/vacina.svg'
import { ShadowPropTypesIOS, Text } from 'react-native';

const Box = styled.TouchableOpacity`
    padding: 10px; 
    background-color: #8EE1BE;
    border: 1px solid;
    border-color: #8EE1BE;
    border-radius: 8px;
    height: 48px; 
    width: 135px; 
    margin-bottom: 20px; 
    flex-direction:row;
    justify-content: center;
    align-items: center;
`; 
 
const IconArea = styled.View`
    justify-content: center;
    align-items: center;
`;

const Description = styled.Text`
    color: #FFFFFF;
    font-size: 15px;
    font-weight:bold; 
    width:80%
`;
  

export default (props) => {
 
    {backgroundColor = (props.backgroundColor ? props.backgroundColor : '#000000') }

    return ( 

    <Box style={{backgroundColor:props.backgroundColor}}onPress={props.onPress}>
  
        <Description style={{color:props.textColor}}>
            {props.text}
        </Description>

        <IconArea>
            <VaccinationIcon/>
        </IconArea>

    </Box>  


    )
}