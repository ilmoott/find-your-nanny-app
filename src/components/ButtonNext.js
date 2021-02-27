import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';


const AreaSignOut = styled.TouchableOpacity`

    margin: 15px;
`;


const ButtonSignOut = styled.View`
    background-color: #3EC5F0; 
    align-items: center; 
    margin-top: 10px;
    margin-bottom: 20px;  
    padding: 20px;
    border-radius: 10px;

`;

export default (props) => {
    return (
        <AreaSignOut onPress={props.onPress}>
            <ButtonSignOut>
                <Text style={{color:"#ffffff", fontWeight:'bold', fontSize:20}}>{props.text}</Text>
            </ButtonSignOut>
        </AreaSignOut>
    )
}