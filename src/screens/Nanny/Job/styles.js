import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView` 
    flex: 1;  
    background-color:#000000; 
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`

export const MapArea = styled.ScrollView`
    height: 60%;   
        
`  
export const ScrollArea = styled.ScrollView`
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
    background-color:#FFFFFF;
    border-top-left-radius: 45px; 
    margin-top: -50px;  

`

export const BodyArea = styled.View`  

    padding-bottom: 50px; 
`

export const ButtonBackArea = styled.TouchableOpacity`
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    margin-top: 20px;
    margin-left: 20px;
    background-color:#3EC5F0
    width:50px;
    height:50px;
    border-radius: 50px;
    align-items: center;
    justify-content: center; 
`

export const Fab = styled.View`
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
`

export const FixedView = styled.View`
    position: absolute;
    right: 0;
    bottom: 0;
    flex-direction: row;
    justify-content: flex-end
` 

export const TextTitle = styled.Text`
    color: #455A64;
    font-size: 22px;
    font-weight: bold;   
`

export const MiniTitle = styled.Text`    
    color: #78909C;
    font-size: 18px; 
    margin-top: 10px; 
    font-weight: bold;   
`

export const PriceArea = styled.View`


`

export const PriceHour = styled.Text`    
    color: #78909C;
    font-size: 14px; 
    margin-top: 10px;    
`

export const PriceTotal = styled.Text`    
    color: #455A64;
    font-size: 40px; 
    margin-top: 5px; 
    font-weight: bold;   
`

export const TextSubtitle = styled.Text`    
    color: #B0BEC5;
    font-size: 16px; 
    margin-top: 5px;`    
    
export const TitleBodyArea = styled.View`
    margin-left: 30px;
    margin-bottom: 20px;
`

export const CheckPointArea = styled.View` 
 
` 
export const ListCertificationsArea = styled.ScrollView`
`
 

export const FooterArea = styled.View` 
    background-color: #ffffff
    margin-bottom: 15px;  
`                       