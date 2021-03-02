import React from 'react';
import styled from 'styled-components/native'; 
import { ShadowPropTypesIOS, Text } from 'react-native';

const SheduleItem = styled.TouchableOpacity`
    padding: 10px;
    border: 2px solid;
    border-color: #3EC5F0;
    border-radius: 15px;
    height: 130px;
    width: 150px;
`; 

const Day = styled.Text`
    color: #3EC5F0;
    font-size: 26px;
    font-weight:bold;
    padding-bottom: 10px;
`;

const Date = styled.Text` 
    color: #B0BEC5;
    font-size: 14px; 
    padding-bottom: 10px;   
`;

const Jobs = styled.Text`
    color: #455A64;
    font-size: 18px; 
    padding-bottom: 10px;  
`; 

export default (props) => {
    return ( 

    <SheduleItem>
 
        <Day>{props.day}</Day>  
    
        <Date>{props.date}</Date>

        <Jobs>{props.jobs}</Jobs>
 

    </SheduleItem>  


    )
}