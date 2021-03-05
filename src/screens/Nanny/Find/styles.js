import React from 'react'
import styled from 'styled-components/native'


export const ScrollArea = styled.ScrollView` 
`;

export const Container = styled.SafeAreaView`
    background-color: #F7F7F7;
    flex: 1;  
    padding-left: 15px; 
`;

export const HeadArea = styled.View`  
    padding-top: 25px; 
    padding-bottom: 10px; 
`;

export const SwapperArea = styled.View`
    padding-top: 10px; 
    height: 180px;
    
`;

export const StageArea = styled.View`
    padding-top: 10px;
    padding-bottom: 10px; 
    height: 130px;
    
`;

export const SearchArea = styled.View`
        margin-top: 20px;
        margin-bottom: 10px;  
    
`;

export const OtherJobs = styled.View` 
    padding-bottom: 10px; 
    height: 200px;
    
`;

export const OtherJobsHead = styled.View`
    flex-direction: row;    
    padding-top: 25px;  
    padding-right: 20px; 

`;

export const OtherJobsLeft = styled.View` 
    width: 80%

`;

export const OtherJobsRight = styled.TouchableOpacity`  
    
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`