import React from 'react'
import styled from 'styled-components/native'
 
export const Container = styled.SafeAreaView`
    background-color: #ffffff;  
    padding-top: 20px;
    flex: 1;   
`;


export const AreaSignOut = styled.TouchableOpacity`
    margin-right: 25px;
    margin-left: 25px;
`;


export const ButtonSignOut = styled.View`
    background-color: #3EC5F0; 
    align-items: center; 
    margin-top: 10px;
    margin-bottom: 20px;  
    padding: 20px;
    border-radius: 10px;

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