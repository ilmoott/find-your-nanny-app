import React, { Text, useEffect, useContext } from 'react' 
import { Container, 
         HeadArea, 
         TextTitleArea,
         TextTitle,
         NavButtonHead,
         NavButton,
         TextButton,
         TextButtonArea,
         ChooseProfileArea,
         ProfileButtonArea,
         ProfileButton,
         ProfileTitleArea,
         ProfileText,
         ProfileTextBold 
        } from './styles.js'

        import AsyncStorage from '@react-native-community/async-storage'

import{ useNavigation } from '@react-navigation/native'
import NavPrevIcon from '../../assets/nav_prev.svg';
import NavNextIcon from '../../assets/nav_next.svg';
 
import { UserContext } from '../../contexts/UserContext'     

export default () => {

    const {dispatch: UserDispatch} = useContext(UserContext)
    const navigation = useNavigation();

    const handleClickNanny =  () => {
        // alert(`I'm a Nanny`)
        navigation.navigate('TermsUse');
    }

    const handleClickParent =  () => {
        // alert(`I'm a Parent`)
        navigation.navigate('TermsUse');
    }

    const handleClickBack =  () => {        
        navigation.navigate('SignUp');
    }



    useEffect(() => {
        
    }, []);
 

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

            <ChooseProfileArea>

                <ProfileTitleArea>
                    <ProfileText>Choose your</ProfileText>
                    <ProfileTextBold> profile</ProfileTextBold>
                </ProfileTitleArea>

                <ProfileButtonArea>

                    <ProfileButton onPress={handleClickNanny}>
                        <TextButtonArea>
                            <TextButton>I'm nanny</TextButton> 
                        </TextButtonArea>
                        <NavButton onPress={handleClickNanny}>                        
                            <NavNextIcon fill="#3EC5F0"/>       
                        </NavButton>      
                    </ProfileButton>

                    <ProfileButton onPress={handleClickParent}>
                        <TextButtonArea>
                            <TextButton>I'm parent</TextButton> 
                        </TextButtonArea> 
                        <NavButton onPress={handleClickNanny}>                        
                            <NavNextIcon fill="#3EC5F0"/>       
                        </NavButton>                     
                    </ProfileButton>

                </ProfileButtonArea>

                
            </ChooseProfileArea>
            
        </Container>
    );
}
