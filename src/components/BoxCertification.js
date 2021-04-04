import React from 'react';
import styled from 'styled-components/native'; 
import { ShadowPropTypesIOS, Text } from 'react-native';
import FirstAidIcon from '../assets/hospital_icon.svg'  
import DocumentIcon from '../assets/document_icon.svg'  

const Box = styled.TouchableOpacity`
    padding: 10px; 
    background-color: #8EE1BE;
    border-radius: 15px;
    height: 107px; 
    width: 106px; 
    margin-bottom: 15px;
    align-items: center;
`; 
 
const IconArea = styled.View`
    justify-content: center;
    align-items: center;
    height:80%
`;

const Description = styled.Text`
    color: #FFFFFF;
    font-size: 13px;
    font-weight:bold;
    padding-bottom: 10px;
`;
  

export default (props) => {
 
    {backgroundColor = (props.backgroundColor ? props.backgroundColor : '#000000') }

    return ( 

    <Box style={{backgroundColor:props.backgroundColor}}onPress={props.onPress}>
  
        <IconArea>
            {props.icon}
        </IconArea>

        <Description style={{color:props.textColor}}>
            {props.text}
        </Description>
        

    </Box>  


    )
}