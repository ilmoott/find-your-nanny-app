import React, { useState, useEffect, useContext } from 'react' 
import { Container, 
         HeadArea, 
         TextTitleArea,
         TextTitle,
         NavButtonHead,  
         TermsOfUseArea,
         TermsDescriptionArea,
         TermsDescription,
         TextTitleTerms,
         FooterArea,
         FooterButton,
         FooterButtonText,
         TipText
        } from './styles.js'
 
import AsyncStorage from '@react-native-community/async-storage'

import{ useNavigation } from '@react-navigation/native'
import NavPrevIcon from '../../assets/nav_prev.svg'; 
 
import { UserContext } from '../../contexts/UserContext'     
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

export default () => {

    const {dispatch: UserDispatch} = useContext(UserContext)
    
    const [activedButton, setActivedButton] = useState(false);
    const navigation = useNavigation();

 
    const handleClickBack =  () => {        
        navigation.navigate('ChooseProfile');
    }

    const handleClickAcceptTerms =  () => {        
        // navigation.navigate('ChooseProfile');
        
    }


    const endOfScroll = () => {         
        true;
    }



    useEffect(() => {  // serve como um FormShow


    }, []);

   const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        return layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
     }
 

    return(
        <Container>

            <HeadArea>
                <NavButtonHead onPress={handleClickBack}>
                    <NavPrevIcon fill="#FFFFFF"/>  
                </NavButtonHead> 
                <TextTitleArea>                    
                    <TextTitle>Register</TextTitle>
                </TextTitleArea> 
            </HeadArea>

            <TermsOfUseArea>
                 
                 <TextTitleTerms>Terms of use</TextTitleTerms>

                 <TermsDescriptionArea  
                    
                    onScroll={({nativeEvent})=>{ 
                        if(isCloseToBottom(nativeEvent)){
                            setActivedButton(true) 
                        } 
                    }}
                    >

                    <TermsDescription>
                       
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum. {"\n"}{"\n"}
                        
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum. {"\n"}{"\n"}

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </TermsDescription> 

                 </TermsDescriptionArea>
                 

                <FooterArea>
                    <TipText>Scroll to the end to sign</TipText>
                    <FooterButton style={activedButton ? {opacity:1} : {opacity:0.5}}
                                  onPress={handleClickAcceptTerms}
                                  disabled={!activedButton}>
                        <FooterButtonText>Accept and Register</FooterButtonText>
                    </FooterButton>
                </FooterArea>
 
            </TermsOfUseArea>
            
        </Container>
    );
}
