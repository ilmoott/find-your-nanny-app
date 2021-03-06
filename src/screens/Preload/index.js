import React, { useEffect, useContext } from 'react' 
import { Container, LoadingIcon } from './styles.js'
import AsyncStorage from '@react-native-community/async-storage'
import{ useNavigation } from '@react-navigation/native'
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

                navigation.navigate('Initial');

            }else{
                // mando pra login

                navigation.navigate('Initial') //minha tela de login

            }
        }
        checkToken();
    }, []);
 

    return(
        <Container>
            <Logo width="60%"/>
            <LoadingIcon size="large" color="#FFFFFF"/>
        </Container>
    );
}