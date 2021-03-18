import React from 'react';
import styled from 'styled-components/native'; 
import { ShadowPropTypesIOS, Text } from 'react-native';

const NearToItem = styled.View`
    padding: 10px; 
    flex-direction: row;
    background-color: #FFFFFF;
    border-radius: 15px; 
    margin-bottom: 15px;
`;
const UserInfo = styled.View` 
`;



const UserType = styled.Text`
    color: #78909C;
    font-size: 14px; 
    padding-bottom: 5px;
`;

const UserName = styled.Text`
    color: #455A64;
    font-size: 18px;
    font-weight:bold; 
`;
 
 
export default (props) => {
    return ( 

    <NearToItem onPress={props.onPress}>
 
        <UserInfo>
            <UserType>{props.type}</UserType> 
            <UserName>{props.name}</UserName> 
        </UserInfo> 
 

    </NearToItem>  


    )
}