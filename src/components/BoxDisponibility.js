import React from 'react';
import styled from 'styled-components/native'; 
import { ShadowPropTypesIOS, Text } from 'react-native'; 
import CalendarIcon from '../assets/calendar_icon.svg'  

const Box = styled.TouchableOpacity`
    margin-bottom: 15px; 
    background-color: #FFFFFF;
    border: 1px solid;
    border-color: #3EC5F0;
    border-radius: 15px;
    height: 74px; 
    width: 100%;  
    align-items: center;
    flex-direction: row;
`; 
 
const IconArea = styled.View`
    justify-content: center;
    align-items: center;
    padding: 10px;
    width:20%
`;

const TextArea = styled.View` 
`;

const Description = styled.Text`
    color: #455A64;
    font-size: 18px;  
    padding-bottom: 10px;
`;

const Interval = styled.Text`
    color: #B0BEC5;
    font-size: 18px;
    padding-bottom: 10px;
`;
  

export default (props) => {
   
    return ( 

    <Box onPress={props.onPress}>
  
        <IconArea>
            <CalendarIcon/>
        </IconArea>

        <TextArea>
            <Description>
                {props.description}
            </Description>

            <Interval>
                {props.interval}
            </Interval>
        </TextArea>

        

    </Box>  


    )
}