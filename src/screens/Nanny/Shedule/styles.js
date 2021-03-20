import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    background-color: #ffffff;  
    flex:1;
    margin-bottom: 30px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`

export const Title = styled.Text`
    color: #37474F;
    font-size: 28px;
    font-weight: bold;  
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
`