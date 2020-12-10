import React from 'react';
import styled from 'styled-components/native';


export const ScrollArea = styled.ScrollView`
    background-color: #FFFFFF;
    flex: 1;
`;

export const Container = styled.SafeAreaView`
    background-color: #FFFFFF;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
`;



export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
    margin-top: 30px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #3EC5F0;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #FFF;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 20px;
`;
export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: #268596;
`;
export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: #268596;
    font-weight: bold;
    margin-left: 5px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`