import React from 'react';
import styled from 'styled-components/native';
import { ShadowPropTypesIOS, Text } from 'react-native';


const AreaSignOut = styled.TouchableOpacity`
    margin-top: 10px; 
    width: 100%;
`;


const ButtonSignOut = styled.View` 
    align-items: center; 
    padding: 15px; 
    border: 1px solid;
    border-radius: 10px;

`; 

export default (props) => {
    {padding = (props.padding > 0 ? props.padding : 15) }
    {marginRight = (props.marginRight > 0 ? parseInt(props.marginRight) : 0) }
    {width = (props.width ? props.width : '100%') }
  
    return (
        <AreaSignOut style={{width: width, marginRight: marginRight}} onPress={props.onPress}>
            <ButtonSignOut style={{backgroundColor: props.backgroundColor, borderColor:props.borderColor, 
                                   paddingTop:padding, paddingBottom: padding}}>
                <Text style={{color:props.color, fontSize:16}}>{props.text}</Text>
            </ButtonSignOut>
        </AreaSignOut>
    )
}