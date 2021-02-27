import React from 'react';
import styled from 'styled-components/native';
import { ShadowPropTypesIOS, Text } from 'react-native';


const AreaSignOut = styled.TouchableOpacity`
    margin: 10px;
    width: 90%;
`;


const ButtonSignOut = styled.View` 
    align-items: center; 
    padding: 20px; 
    border: 1px solid;
    border-radius: 10px;

`;

export default (props) => {
    return (
        <AreaSignOut onPress={props.onPress}>
            <ButtonSignOut style={{backgroundColor: props.backgroundColor, borderColor:props.borderColor}}>
                <Text style={{color:props.color, fontSize:16}}>{props.text}</Text>
            </ButtonSignOut>
        </AreaSignOut>
    )
}