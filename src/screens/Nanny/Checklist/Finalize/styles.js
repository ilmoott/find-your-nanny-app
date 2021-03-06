import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    background-color: #40CE81;  
    flex: 1; 
`;

export const AvatarArea = styled.View`
    background-color: #40CE81;
    align-items: center; 
    margin-bottom: 50px;
`;

export const TextArea = styled.View`
    background-color: #40CE81;
    align-items: center; 
    margin-top: 30px; 
    margin-bottom: 50px;
    margin-left: 10px;
    margin-right: 10px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`

export const HeaderArea = styled.View` 
 
    margin-top: 70px;
    margin-bottom: 25px;
    align-items: center; 
        
`


export const BodyArea = styled.View`
    background-color: #ffffff;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;  
    padding-top: 20px;  
`

export const ButtonBackArea = styled.TouchableOpacity`
    padding-left: 20px;
`

export const TitleArea = styled.View`
    flex:1;
    justify-content: center;
    align-items: center; 
`
export const TextTitle = styled.Text`
    color: #FFFFFF;
    font-size: 20px;
    font-weight: bold;  
    margin-left: -40px;
`
 
export const TitleBodyArea = styled.View`
    flex-direction: row;
    margin-left: 30px;
    margin-bottom: 20px;
`

export const ListPersonalData = styled.ScrollView`
 
    
`

export const PersonalArea = styled.View`     
    align-items: center; 
    justify-content: center;
`
export const CityArea = styled.View`  
    align-items: center; 
    background-color: #ffffff
    justify-content: center;
    flex-direction: row;    
`
 

export const FooterArea = styled.View`  
    padding-right: 5%;
    padding-left: 5%;
    align-items: center; 
`