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
    background-color: #FFFFFF;
    flex: 1;     
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
    margin-left: 30px;
`
 
export const ListCertificationsArea = styled.ScrollView`


`

export const CertificationButton = styled.TouchableOpacity`
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

export const CertificationText = styled.View`

`

export const CertificationIcon = styled.View`

`


export const FooterArea = styled.View` 
    background-color: #ffffff
`