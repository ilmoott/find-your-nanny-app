import React,{useState} from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';


import UncheckCircle from '../assets/circle_unchecked.svg';
import CheckCircle from '../assets/circle_checked.svg';

const CertificationButton = styled.TouchableOpacity`
    background-color: #ffffff;
    height: 60px;
    width: 340px;
    align-items: center;
    border-radius: 10px;
    border: 1px solid;
    border-color: #3EC5F0; 
    flex-direction: row;
    margin-top: 10px;
    padding: 15px;
    padding-bottom: 15px;
    margin-left: 25px; 
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
        
        if (colorActive == '#5F9CAF'){
            setColor('#66DAA9') 
            setImgCircle(CheckCircle)
        }else{
            setColor('#5F9CAF') 
            setImgCircle(UncheckCircle)
        }
        
    }

    const [colorActive, setColor] = useState('#5F9CAF');
    const [imgCircle, setImgCircle] = useState(UncheckCircle);

    return ( 
    
        <CertificationButton style={{borderColor:colorActive}} onPress={handleCheck}>
            <CertificationText>
                <Text style={{color:colorActive, fontSize:18}}>{props.text}</Text>
            </CertificationText>    

            <CertificationIcon>
                {imgCircle}
            </CertificationIcon>
        </CertificationButton>
 
    )
}