import React from 'react';
import styled from 'styled-components/native';  
import { ShadowPropTypesIOS, Text } from 'react-native';

const NotificationItem = styled.TouchableOpacity`
    flex-direction:row;
    padding: 10px;
    border: 2px solid;
    border-color: #3EC5F0;
    border-radius: 15px;
    height: 100px;
    margin-bottom: 20px; 
`; 

const TextArea = styled.View`    
    width: 80%; 
`;

const Circle = styled.View`    
    height: 50px;
    width: 50px;
    border-radius: 75px;
    background-color: #40CE81;
    justify-content: center;    
    align-items: center;    
    margin: 15px;  
`;


const Title = styled.Text`
    color: #40CE81;
    font-size: 18px;
    font-weight:bold;
    padding-bottom: 10px;
`;

const Description = styled.Text` 
    color: #78909C;
    font-size: 14px;  
`;

const Number = styled.Text`
    color: #FFFFFF; 
    font-size: 18px;
`; 

export default (props) => {
    return ( 

    <NotificationItem style={{borderColor:props.color}}>

        <TextArea>

            <Title style={{color:props.color}}>{props.title}</Title>  
            <Description>{props.description}</Description>  

        </TextArea>
  
        <Circle style={{backgroundColor:props.color}}> 
            <Number>{props.number}</Number>  
        </Circle>
             
         

    </NotificationItem>  


    )
}