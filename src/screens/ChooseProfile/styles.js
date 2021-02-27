import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView` 
    flex: 1;    
    background-color: #3EC5F0; 
`;

export const HeadArea = styled.View`
    background-color: #3EC5F0; 
    height: 15%;
    width: 100%;
    align-items: center;
    flex-direction: row;
`;
export const ChooseProfileArea = styled.View`
    background-color: #FFFFFF;
    flex: 1;     
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;  
    padding-top: 20px;

`;


export const TextTitle = styled.Text`
    color: #FFFFFF;
    font-size: 20px;
    font-weight: bold;  
    margin-left: -30px;
`;

export const ProfileButtonArea = styled.View`
    background-color: #FFFFFF; 
    align-items: center; 
    padding-top: 20px;  
    flex: 1;
`;

export const ProfileButton = styled.TouchableOpacity`
    background-color: #FFFFFF;
    height: 60px;
    width: 340px;
    align-items: center;
    border-radius: 10px;
    border: 1px solid;
    border-color: #3EC5F0; 
    flex-direction: row;
    margin-top: 20px;
    padding: 15px;
    padding-bottom: 15px;
`;

export const TextButton = styled.Text`
    color: #959595;
    font-size: 18px;
    font-weight: bold;
`;

export const NavButtonHead = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
`;

export const NavButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
`;

export const TextTitleArea = styled.View` 
    flex : 1;
    align-items: center; 
    justify-content: center;
`;

export const TextButtonArea = styled.View` 
    flex : 1;
    align-items: center; 
    justify-content: center;
`;

export const ProfileTitleArea = styled.View` 
    flex-direction : row;
    align-items: center;   
    margin-top: 10px;
    margin-left: 15px;
    margin-bottom: 15px;
`;

export const ProfileText = styled.Text`
    color: #3EC5F0;
    font-size: 20px; 
`;

export const ProfileTextBold = styled.Text`
    color: #3EC5F0;
    font-size: 20px;
    font-weight: bold;
`;
  