import React from 'react';
import styled from 'styled-components/native'; 
import { ShadowPropTypesIOS, Text } from 'react-native'; 

const Box = styled.TouchableOpacity`
    padding: 10px; 
    background-color: #5F9CAF;
    border: 1px solid;
    border-color: #5F9CAF;
    border-radius: 8px;
    height: 42px; 
    width: 113px; 
    margin-bottom: 20px; 
    flex-direction:row
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
            {props.icon}
        </IconArea>

    </Box>  


    )
}