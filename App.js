import React from 'react' 
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './src/stacks/MainStack'

import UserContextProvider from './src/contexts/UserContext'
export default () => {

  return(
    // vem acima pois indica que todo o app vai ter informação do usuário
     <UserContextProvider> 
      <NavigationContainer>
        <MainStack/> 
      </NavigationContainer>
    </UserContextProvider>
      
  );

}