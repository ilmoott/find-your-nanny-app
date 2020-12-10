import  React, {useState, useContext} from 'react' 
import {useNavigation} from '@react-navigation/native'
import { Container,
         ScrollMain,
         InputArea,
         CustomButton,
         CustomButtonText,
         SignMessageButton,
         SignMessageButtonText,
         SignMessageButtonTextBold} from './styles'

import SignInput from '../../components/SignInput'

import NannyLogo from '../../assets/LogoAzul.svg'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'
import PersonIcon from '../../assets/person.svg' 


import AsyncStorage from '@react-native-community/async-storage'
import { UserContext } from '../../contexts/UserContext'     

export default () => {


    const {dispatch: UserDispatch} = useContext(UserContext)

    const [nomeField, setNomeField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [passwordRepeatField, setPasswordRepeatField] = useState('');

    const navigation = useNavigation();
    
    const handleMessageButtonClick = () => {



        navigation.reset({
            routes: [{name: 'SignIn'}] // Como eu sei que isso é uma rota??
        });

    }

    const handleSignClick = async () => {


        
        navigation.reset({
            routes: [{name: 'ChooseProfile'}] // Com isso ele não consegue "VOLTAR" pelo celular
        });

        // if(nomeField != '' && emailField != '' && passwordField != '' ){

            // let res = await Api.signUp(nomeField, emailField, passwordField)
 
            //     if(res.token){
            //         await AsyncStorage.setItem('token', res.token)

            //         UserDispatch({
            //             type: 'setAvatar',
            //             payload:{
            //                 avatar: res.data.avatar
            //             }
            //         })

            //         navigation.reset({
            //             routes:[{name:'MainTab'}] // ele olha lá na MainStack..pq?
            //         })


            // }else{
            //     alert("Erro: "+res.error);

            // } 

    //    } else {
    //        alert("Preenchaos campos");
    //    }

    }    



    return(
        <ScrollMain>

            <Container>

            <NannyLogo width="50%" height="80" />

            <InputArea>

                <SignInput 
                    IconSvg={PersonIcon}
                    placeholder="Your name"
                    value={nomeField}
                    onChangeText={t=>setNomeField(t)} // isso permite alterar o texto no text
                    password={false}
                /> 

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

                <SignInput 
                    IconSvg={LockIcon}
                    placeholder="Repeat password"
                    value={passwordRepeatField}
                    onChangeText={t=>setPasswordRepeatField(t)} // isso permite alterar o texto no text
                    password={true}
                    />

                <CustomButton onPress={handleSignClick}>
                    
                    <CustomButtonText>Sign Up</CustomButtonText>

                </CustomButton>

            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Already have an account?</SignMessageButtonText>
                <SignMessageButtonTextBold>Sign In</SignMessageButtonTextBold>
            </SignMessageButton>


            </Container>

        </ScrollMain>
      
    )
}