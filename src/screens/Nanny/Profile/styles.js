import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    background-color: #ffffff; 
    justify-content: space-between;
    flex: 1;  
`;


export const AreaSignOut = styled.TouchableOpacity`

    margin: 15px;
`;


export const ButtonSignOut = styled.View`
    background-color: #3EC5F0; 
    align-items: center; 
    margin-top: 10px;
    margin-bottom: 20px;  
    padding: 20px;
    border-radius: 10px;

`;


export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`