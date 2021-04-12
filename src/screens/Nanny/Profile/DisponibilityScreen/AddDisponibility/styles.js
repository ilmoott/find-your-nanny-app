import React from 'react'
import styled from 'styled-components/native'

export const ModalScreen = styled.View`

    background-color: #00000070; 
    height: 100%; 
    justify-content:center;
    align-items: center;
`;

export const Container = styled.View`
  background-color: #FFFFFF;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  width: 95%
`;


export const HeaderArea = styled.TouchableOpacity`
    margin-top: 20px;
    margin-bottom: 20px;
`;


export const DayArea = styled.View`
  background-color: #FFFFFF;
  flex-direction: row;
  align-items: center;
  margin-top: 10px; 
  padding: 10px; 

`;

export const HourArea = styled.View`
  background-color: #FFFFFF;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
`;

export const PreviewArea = styled.View`
    align-items: center; 
    margin-top: 10px;
    margin-bottom: 20px;  
    padding: 20px;
    border-radius: 10px;

`;

export const FooterArea = styled.View`
  padding: 20px;
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