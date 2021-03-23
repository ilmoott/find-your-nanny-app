import React, { useEffect, useContext } from 'react' 
import { Container, LoadingIcon, CustomButton, CustomButtonText } from './styles.js'
import AsyncStorage from '@react-native-community/async-storage'
import{ useNavigation } from '@react-navigation/native'
import GenericButton from '../../components/GenericButton' 
import Logo from '../../assets/Logobranca.svg'
 
import { UserContext } from '../../contexts/UserContext'     

export default () => {

    const {dispatch: UserDispatch} = useContext(UserContext)
    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {

            const token = await AsyncStorage.getItem('token') // pega o token que está salvo no aplicativo

            if(token){
                // let res = await Api.checkToken(token); 

                // if (res.token){
 
                //     await AsyncStorage.setItem('token', res.token)

                //     UserDispatch({
                //         type: 'setAvatar',
                //         payload:{
                //             avatar: res.data.avatar
                //         }
                //     })

                //     navigation.reset({
                        
                //         routes:[{name:'MainTab'}]  
                //     })
    
                // } else{
                //     navigation.navigate('SignIn');
                // }            

            } 
        }
        checkToken();
    }, []);

    const handleSignInClick = () => {

        navigation.reset({
            routes: [{name: 'SignIn'}]   
        });

    }

    const handleSignUpClick = () => {

        navigation.reset({
            routes: [{name: 'SignUp'}]  
        });

    }    
 
    padding = 20

    return(
        <Container>
            <Logo width="50%" style={{marginBottom:30}}/> 

            <GenericButton onPress={handleSignInClick} 
                           text="Sign in"  
                           color='#3EC5F0' 
                           backgroundColor='#FFFFFF'
                           borderColor='#3EC5F0'
                           padding={padding}/>

            <GenericButton onPress={handleSignUpClick} 
                                    text="Register Now" 
                                    color='#FFFFFF'
                                    backgroundColor='#3EC5F0'
                                    borderColor='#FFFFFF'
                                    padding={padding}/>                           
 

        </Container>
    );
}