import React,{useState} from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

import FlagIcon from '../assets/flag_icon.svg';
import RightIcon from '../assets/right_icon.svg';

const CertificationButton = styled.TouchableOpacity`
    background-color: #ffffff;
    height: 60px;
    width: 100%;
    align-items: center;
    border-radius: 10px;
    border: 1px solid;
    border-color: #3EC5F0; 
    flex-direction: row;
    margin-top: 10px;
    padding: 15px; 
`;

const CertificationText = styled.View`
    flex: 1;
    margin-left: 10px

`

const CertificationIcon = styled.View`
    margin-right: 10px;

`

export default (props) => {

    const handleCheck = () => {
        
        if (colorActive == '#FFFFFF'){
            setColor('#40CE81') 
            setColorText('#FFFFFF') 
            setImgCircle(RightIcon)
        }else{
            setColor('#FFFFFF') 
            setColorText('#B0BEC5') 
            setImgCircle(FlagIcon)
        }
        
    }

    const [colorActive, setColor] = useState('#FFFFFF');
    const [colorTextActive, setColorText] = useState('#B0BEC5');
    const [imgCircle, setImgCircle] = useState(FlagIcon);

    return ( 
    
        <CertificationButton style={{borderColor:colorTextActive, backgroundColor:colorActive}} onPress={handleCheck}>
            <CertificationText>
                <Text style={{color:colorTextActive, fontSize:14}}>{props.text}</Text>
            </CertificationText>    

            <CertificationIcon>
                {imgCircle}
            </CertificationIcon>
        </CertificationButton>
 
    )
}