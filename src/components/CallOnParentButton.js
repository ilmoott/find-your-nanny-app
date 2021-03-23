import React from 'react';
import styled from 'styled-components/native';
import CallIcon from '../assets/call_icon.svg'
import { ShadowPropTypesIOS, Text } from 'react-native';


const AreaSignOut = styled.TouchableOpacity`
    margin-top: 30px;
    width: 100%;
`;


const ButtonSignOut = styled.View` 
    align-items: center; 
    justify-content: center;
    padding: 15px; 
    border: 1px solid;
    border-radius: 10px;
    flex-direction: row;

`;

const TextArea = styled.View` 
    margin-left:15px; 
`;

export default (props) => {
    return (
        <AreaSignOut onPress={props.onPress}>
            <ButtonSignOut style={{backgroundColor: props.backgroundColor, borderColor:props.borderColor}}>
                <CallIcon/>
                <TextArea>
                    <Text style={{color:props.color, fontSize:16}}>{props.text}</Text>
                </TextArea>
            </ButtonSignOut>
        </AreaSignOut>
    )
}