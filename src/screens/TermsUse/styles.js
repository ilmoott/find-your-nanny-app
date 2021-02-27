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


export const NavButtonHead = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
`;

export const TextTitleArea = styled.View` 
    flex : 1;
    align-items: center; 
    justify-content: center;
`;

export const TextTitle = styled.Text`
    color: #FFFFFF;
    font-size: 20px;
    font-weight: bold;  
    margin-left: -30px;
`;


export const TermsOfUseArea = styled.View` 
    background-color: #FFFFFF;
    flex: 1;     
    border-top-left-radius: 25px;
    border-top-right-radius: 25px; 
    align-items: center; 
    padding-top: 20px;
`;

export const TermsDescriptionArea = styled.ScrollView` 
    flex: 1;
    margin-left: 20px;
    margin-right: 20px;
`;

export const TermsDescription = styled.Text` 
    color: #000000;
    font-size: 15px;  
`;


export const TextTitleTerms = styled.Text` 
    color: #3EC5F0;
    font-size: 20px;
    font-weight: bold;   
    margin-bottom: 20px;
`;

export const FooterArea = styled.View`  
    margin-bottom: 15px;
`;

export const TipText = styled.Text` 
    color: #3EC5F0;
    font-size: 18px;
    font-weight: bold;   
    margin-top: 20px;
`;

export const FooterButton = styled.TouchableOpacity` 
    height: 60px;
    background-color: #3EC5F0; 
    width: 330px;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    border-radius: 10px;
`;

export const FooterButtonText = styled.Text`
    font-size: 18px;
    color: #FFF; 
`;
 


 