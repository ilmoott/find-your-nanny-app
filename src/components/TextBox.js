import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View` 
    height: 60px; 
    flex-direction: row;
    border: 1px solid;
    border-color: #B3BEC1; 
    background-color: #ffffff;  
    border-radius: 10px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
    margin-right: 10px;
    margin-top: 10px;
`; 

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #B3BEC1;
    margin-left: 10px;

`;

export default ({ large,placeholder, value, onChangeText, password}) => {
    return (
        <InputArea style={{width:large}}>              
            <Input
                placeholder={placeholder}
                placeholderTextColor="#B3BEC1"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>
    );
}