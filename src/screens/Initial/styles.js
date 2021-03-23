import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    background-color: #3EC5F0;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-left: 10px
    padding-right: 10px
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`


export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #FFFFFF;
    border-radius: 10px;
    justify-content: center;
    align-items: center; 
    margin-top: 30px; 
    width:80%;
`;
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #3EC5F0;
`;
