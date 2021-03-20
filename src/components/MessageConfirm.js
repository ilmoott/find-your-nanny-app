import React from 'react';
import styled from 'styled-components/native';  
import GenericButton from './GenericButton';
import { ShadowPropTypesIOS, Text } from 'react-native';
 
const Rect = styled.View`

    justify-content:center;
    padding: 20px; 
    border-radius: 10px;
    background-color: #FFFFFF; 
    height: 40%;
    width: 90%; 
`;   

 
const ModalScreen = styled.View`

    justify-content:center; 
    background-color: #00000070; 
    height: 100%;
    align-items: center
`;   


const TitleArea = styled.View`
    margin-bottom: 20px;
`

const DescriptionArea = styled.View`
    margin-bottom: 20px;
`

export default (props) => {
    return ( 
 
        <ModalScreen>

            <Rect> 

                <TitleArea>
                    <Text style={{color:'#37474F', fontSize:20}}>{props.title}</Text>                
                </TitleArea>

                <DescriptionArea>
                    <Text style={{color:'#78909C'}}>{props.description}</Text>
                </DescriptionArea>
            
                <GenericButton onPress={props.onPressConfirm}
                                text="Confirm" 
                                color='#FFFFFF'
                                backgroundColor='#40CE81'
                                borderColor='#40CE81'/>  
            
                <GenericButton onPress={props.onPressCancel}
                                text="Return" 
                                color='#78909C'
                                backgroundColor='#FFFFFF'
                                borderColor='#78909C'/>  
    

            </Rect> 

        </ModalScreen>


    )
}