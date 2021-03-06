import React from 'react';
import styled from 'styled-components/native';


export const ScrollMain = styled.ScrollView`
    background-color: #ffffff;
`;

export const Container = styled.SafeAreaView`
    background-color: #ffffff; 
    justify-content: center;
    align-items: center; 
    justify-content: center;
    margin-top: 50px;
`;


export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #3EC5F0;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #FFF;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center; 
    padding-bottom: 25px;
`;
export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: #3EC5F0;
`;
export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: #3EC5F0;
    font-weight: bold;
    margin-left: 5px;
`;
