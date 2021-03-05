import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
    width: 95%;
    height: 60px; 
    flex-direction: row; 
    background-color: #ffffff;  
    border-radius: 10px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`; 

const IconArea = styled.TouchableOpacity` 
    margin-right: 15px;
`; 

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #3EC5F0;
    margin-left: 10px;

`;

export default ({IconSvg, placeholder, value, onChangeText, password}) => {
    return (
        <InputArea> 
            <Input
                placeholder={placeholder}
                placeholderTextColor="#268596"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
            <IconArea>
                <IconSvg width="24" height="24"/>
            </IconArea>
        </InputArea>
    );
}