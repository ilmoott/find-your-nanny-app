import React from 'react';
import styled from 'styled-components/native'; 
import { ShadowPropTypesIOS, Text } from 'react-native';
 
const RectOne = styled.View`

    justify-content: center;
    align-items: center;
    margin-right: 10px;
    margin-top: 10px; 
    background-color: #3EC5F0;
    border-radius: 25px;
    height: 40px;
    width: 130px;
`;  

export default (props) => {
    return ( 
 
        <RectOne style={{backgroundColor:props.color}}>
            <Text style={{color:'#ffffff'}}>{props.text}</Text>
        </RectOne> 



    )
}