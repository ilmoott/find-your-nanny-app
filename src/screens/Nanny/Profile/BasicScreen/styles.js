import React from 'react'
import styled from 'styled-components/native'


export const ScrollArea = styled.ScrollView`
  background-color: #ffffff;
  flex: 1;
  padding-left: 5px;
  padding-right: 5px;
`;   

export const Container = styled.View`
    background-color: #ffffff;  
    flex: 1;  
`;

export const SwapperArea = styled.View`
    padding-top: 10px;  
    
`;   

export const MiniTitle = styled.Text`    
    color: #78909C;
    font-size: 18px; 
    margin-top: 15px; 
    margin-bottom: 15px; 
    font-weight: bold;   
`

export const TextTitle = styled.Text`
    color: #37474F;
    font-size: 14px; 
    margin-bottom: 20px;
`
export const NameUser = styled.Text`
    color: #455A64;
    font-size: 24px; 
`

export const HeaderArea = styled.View`  
    margin-top: 20px;
    margin-bottom: 40px;
    height: 60px;
    justify-content: center; 
`;

export const ProfileArea = styled.View` 
    flex-direction: row; 
    
`;

export const ProfilePhotoArea = styled.View` 
    
    margin-right: 25px;
`;

export const ProfileNameArea = styled.View` 

`;

export const ProfileButtonArea = styled.View` 
    flex-direction: row;
`;

export const ButtonTabArea = styled.View` 
    margin-top: 50px;
    flex-direction: row; 
`;

export const SubScreenArea = styled.View` 

`;


export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`