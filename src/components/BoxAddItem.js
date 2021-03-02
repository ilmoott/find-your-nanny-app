import React from 'react';
import styled from 'styled-components/native'; 
import { ShadowPropTypesIOS, Text } from 'react-native';

const NearToItem = styled.TouchableOpacity`
    padding: 10px;
    border: 2px solid;
    border-color: #3EC5F0;
    border-radius: 15px;
    height: 130px;
    width: 290px;
`;
const NearToInfo = styled.View``;

const NearToName = styled.Text`
    color: #66DAA9;
    font-size: 18px;
    font-weight:bold;
    padding-bottom: 10px;
`;


const NearToBody = styled.Text``;

const FooterArea = styled.View`
    
    flex-direction:row;

`;

const RectOne = styled.View`

    justify-content: center;
    align-items: center;
    margin-right: 10px;
    margin-top: 10px; 
    background-color: #3EC5F0;
    border-radius: 8px;
    height: 30px;
    width: 80px;
`; 

const PriceArea = styled.View`
    justify-content: center;
    align-items: center;  
    flex: 1;

`;

export default (props) => {
    return ( 

    <NearToItem>
        <NearToInfo>
            <NearToName>{props.title}</NearToName> 
        </NearToInfo>
        
        <NearToBody>{props.body}</NearToBody>

        <FooterArea>

            <RectOne>
                <Text style={{color:'#ffffff'}}>{props.taga}</Text>
            </RectOne> 

            <RectOne>
                <Text style={{color:'#ffffff'}}>{props.tagb}</Text>
            </RectOne> 

            <PriceArea>
                <Text  style={{color:'#F1C38D',fontSize:18, fontWeight:'bold'}}>{props.price}</Text>
            </PriceArea>

        </FooterArea>

    </NearToItem>  


    )
}