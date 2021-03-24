import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    background-color: #3EC5F0;
    flex: 1; 
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`

export const HeaderArea = styled.View`
    height: 13%;
    width: 100%;
    align-items: center;
    flex-direction: row;
        
`


export const BodyArea = styled.View`
    background-color: #ffffff;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;  
    padding-top: 20px; 
    flex:1;
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

    background-color: #ffffff;
    align-items: center; 
    padding-right: 5%;
    padding-left: 5%;
`