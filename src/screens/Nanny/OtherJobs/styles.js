import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView` 
    flex: 1; 
    padding: 20px;
    background-color:#F7F7F7
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
export const BodyArea = styled.ScrollView` 
    flex: 1;      
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
    color: #3EC5F0;
    font-size: 22px;
    font-weight: bold;  
    margin-left: -40px;
`
 
export const TitleBodyArea = styled.View`
    margin-left: 30px;
    margin-bottom: 20px;
`

export const ListCertificationsArea = styled.ScrollView`
`
 

export const FooterArea = styled.View` 
    background-color: #ffffff
`