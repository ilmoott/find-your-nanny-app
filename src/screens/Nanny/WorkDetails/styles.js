import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView` 
    flex: 1; 
    padding: 20px;
    background-color: #F7F7F7;
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

export const UserPhoto = styled.View`
    align-items: center;
    justify-content: center;
    background-color: #78909C;
    width: 90px;
    height: 90px;
    border-radius: 90px;
    margin-bottom:10px;

`;

export const ListCertificationsArea = styled.ScrollView`
`
export const WorkTitleArea = styled.View` 

    padding: 20px;
    background-color: #FFFFFF;
    border-radius: 20px;
    margin-bottom: 10px;

`

export const WorkTextTitle = styled.Text`
    color: #37474F;
    font-size: 20px;
    font-weight: bold;   
    margin-bottom: 20px;
`

export const WorkTextSubtitle = styled.Text`    
    font-size: 16px; 
    margin-bottom: 10px;
`
export const UserArea = styled.View`  
    flex-direction:row;
    background-color:#FFFFFF;
    padding: 10px;
    border-radius: 20px;
    margin-bottom: 10px;
`
export const DetailsArea = styled.View`  
    padding: 10px;
    background-color: #FFFFFF;
    border-radius: 20px;
    margin-bottom: 10px;
`
export const PriceAndDateArea = styled.View` 
    flex-direction: row;
    margin-left: 10px;
    align-items: center;
    margin-bottom: 20px;
`

export const PriceArea = styled.View` 
    margin-right: 20px; 
`

export const TagsArea = styled.View` 
    flex-direction: row
    margin-bottom: 20px;    
`
export const DescriptionArea = styled.View` 
    background-color: #FFFFFF
    margin-bottom: 20px;
    border-radius: 8px;
    padding: 10px;

` 
export const FooterArea = styled.View`  
    margin-bottom: 10px; 
`