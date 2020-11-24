import React from 'react';
import { Text } from 'react-native';
import { ScrollArea, 
         Container,
         HeadArea,
         NotificationIconArea,
         NotificationsArea,
         NotificationBox,
         NotificationBoxMessage,
         NearToArea,
         NearToItem,
         NearToInfo,
         NearToName, 
         NearToBody,
         YourActivityArea,
         YourActivityItem 
     } from './styles.js' 
import NavPrevIcon from '../../../assets/nav_prev.svg'
import NavNextIcon from '../../../assets/nav_next.svg'
import NotificationIcon from '../../../assets/bell.svg'
import AlertIcon from '../../../assets/alert_circle.svg'
import PhoneIcon from '../../../assets/megaphone.svg'
import Swiper from 'react-native-swiper'

export default () => {
    return (
        <ScrollArea>

            <Container>

                <HeadArea>

                    <Text>Welcome, </Text>
                    <Text>Mary</Text>

                    <NotificationIconArea>
                        <NotificationIcon/>
                    </NotificationIconArea>
                    
                </HeadArea>   

                <NotificationsArea>

                    <Text>Get Started</Text>

                    <NotificationBox>

                        <NotificationBoxMessage>
                            <Text>Finalize your registration</Text>
                            <Text>And advertise your profile right now</Text>
                        </NotificationBoxMessage>

                        <AlertIcon/>

                    </NotificationBox>
 
                </NotificationsArea>     

                <NearToArea>

                    <Swiper
                            style={{height: 110}}
                            showsPagination={false}
                            showsButtons={true}
                            prevButton={<NavPrevIcon width="35" height="35" fill="#000000"/>}
                            nextButton={<NavNextIcon width="35" height="35" fill="#000000"/>}
                        >                          
                                <NearToItem>
                                    <NearToInfo>
                                        <NearToName>Anonounce</NearToName> 
                                    </NearToInfo>
                                    <NearToBody>Announce details...</NearToBody>
                                </NearToItem>
                         
                        </Swiper> 
                    
                </NearToArea>

                <YourActivityArea>

                    <YourActivityItem>
                        <PhoneIcon/>
                        <Text>Babysitter for two twin children</Text>
                    </YourActivityItem>
                    
                </YourActivityArea>
 

            </Container>
 
        </ScrollArea>
    );
}