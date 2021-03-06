import React from 'react';
import styled from 'styled-components/native'; 
import { ShadowPropTypesIOS, Text } from 'react-native';

const NearToItem = styled.TouchableOpacity`
    padding: 10px; 
    background-color: #FFFFFF;
    border-radius: 15px;
    height: 100px; 
    margin-bottom: 15px;
`;
const NearToInfo = styled.View``;

const NearToName = styled.Text`
    color: #66DAA9;
    font-size: 18px;
    font-weight:bold;
    padding-bottom: 10px;
`;
 
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
    margin-left: -30px;
    flex: 1;

`;

export default (props) => {
    return ( 

    <NearToItem onPress={props.onPress}>

        <NearToInfo>
            <NearToName>{props.title}</NearToName> 
        </NearToInfo> 

        <FooterArea>

            <PriceArea>
                <Text  style={{color:'#F1C38D',fontSize:18, fontWeight:'bold'}}>{props.price}</Text>
            </PriceArea>

            <RectOne>
                <Text style={{color:'#ffffff'}}>{props.taga}</Text>
            </RectOne> 

            <RectOne>
                <Text style={{color:'#ffffff'}}>{props.tagb}</Text>
            </RectOne> 

        </FooterArea>

    </NearToItem>  


    )
}