import React from 'react';
import styled from 'styled-components/native'; 
import { ShadowPropTypesIOS, Text } from 'react-native';

const NearToItem = styled.TouchableOpacity`
    padding: 10px; 
    background-color: #FFFFFF;
    border-radius: 15px;
    height: 70px; 
    width: 210px;
    align-items: center;
    justify-content: center;
`;
const NearToInfo = styled.View``;

const NearToName = styled.Text`
    color: #FFFFFF;
    font-size: 18px;
    font-weight:bold; 
`; 

export default (props) => {
    return ( 

    <NearToItem style={{backgroundColor:props.color}}>

        <NearToInfo>
            <NearToName>{props.title}</NearToName> 
        </NearToInfo> 
 
    </NearToItem>  


    )
}