import React from 'react'
import styled from 'styled-components/native'

export const ScrollArea = styled.ScrollView`     
`;

export const Container = styled.View`
    background-color: #ffffff;  
    flex: 1;  
    padding-left: 25px;
    padding-right: 25px;
`;


export const VaccinationArea = styled.View`
  background-color: #FFFFFF;
  align-items: center;
  margin-top: 10px; 
  padding-left: 55px;
  border-radius: 10px;
  height: 80px

`;


export const WorkHistoryArea = styled.View`
  background-color: #FFFFFF;
  align-items: center;
  margin-top: 10px; 
  border-radius: 10px;

`;

export const SwapperArea = styled.View`
    padding-top: 10px;  
    
`;
export const TextTitle = styled.Text`
    color: #455A64;
    font-size: 32px;   
`
export const MiniTitle = styled.Text`    
    color: #78909C;
    font-size: 18px; 
    margin-top: 10px; 
    font-weight: bold;   
`

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`