import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    background-color: #F7F7F7;
    flex: 1;  
    padding-left: 15px; 
`;

export const HeadArea = styled.View` 
    flex-direction: row;    
    padding-top: 25px; 
    padding-bottom: 50px; 
`;

export const SwapperArea = styled.View`
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 20px;
    height: 200px;
    
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`