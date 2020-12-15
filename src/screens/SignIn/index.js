import  React, {useState, Text, useContext } from 'react' 
import {useNavigation} from '@react-navigation/native'
import { Container,
         ScrollArea,
         InputArea,
         CustomButton,
         CustomButtonText, 
         SignMessageButton,
         SignMessageButtonText,
         SignMessageButtonTextBold} from './styles'

// var FBLoginButton = require('../../FBLoginButton');

import SignInput from '../../components/SignInput'

import NannyLogo from '../../assets/LogoAzul.svg'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'
 
import AsyncStorage from '@react-native-community/async-storage'
import { UserContext } from '../../contexts/UserContext'     


export default () => {

    const {dispatch: UserDispatch} = useContext(UserContext)

    const [emailField, setEmailField] = useState('julio@hotmail.com');
    const [passwordField, setPasswordField] = useState('123');

    const navigation = useNavigation();
    
    const handleMessageButtonClick = () => {

        navigation.reset({
            routes: [{name: 'SignUp'}] // Como eu sei que isso é uma rota??
        });

    }

    const handleSignClick = async () => {

        navigation.reset({
            routes:[{name:'MainTabNanny'}] 
        })

        // if(emailField != ''  && passwordField != ''){
        //     let json = await Api.signIn(emailField, passwordField);

        //     if(json.token){
        //         await AsyncStorage.setItem('token', json.token)

        //         UserDispatch({
        //             type: 'setAvatar',
        //             payload:{
        //                 avatar: json.data.avatar
        //             }
        //         })

        //         navigation.reset({
        //             routes:[{name:'MainTab'}] 
        //         })


        //     }else{
        //         alert("E-mail e/ou senha errados!")
        //     }
 

    //     }else{
    //         alert("Preencha os campos")
    //     }

    }    



    return(
        <ScrollArea>

            <Container>

                <NannyLogo width="70%" height="110" />

                <InputArea>

                    <SignInput 
                        IconSvg={EmailIcon}
                        placeholder="Your e-mail"
                        value={emailField}
                        onChangeText={t=>setEmailField(t)} // isso permite alterar o texto no text
                        password={false}
                    />

                    <SignInput 
                        IconSvg={LockIcon}
                        placeholder="Your password"
                        value={passwordField}
                        onChangeText={t=>setPasswordField(t)} // isso permite alterar o texto no text
                        password={true}
                        />
    
                    <CustomButton onPress={handleSignClick}>
                        
                        <CustomButtonText>LOGIN</CustomButtonText>

                    </CustomButton>

                </InputArea>

                <SignMessageButton onPress={handleMessageButtonClick}>
                    <SignMessageButtonText>Don't have an account?</SignMessageButtonText>
                    <SignMessageButtonTextBold>Sign Up</SignMessageButtonTextBold> 

    
                </SignMessageButton>

            </Container>

        </ScrollArea>
    )
}