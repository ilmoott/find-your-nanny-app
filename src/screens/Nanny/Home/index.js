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
         FooterArea,
         RectOne,
         RectTwo,
         PriceArea,
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

                    <Text style={{fontSize:28, color:'#5F9CAF'}}>Welcome, </Text>
                    <Text style={{fontSize:28, color:'#5F9CAF', fontWeight:'bold'}}>Mary</Text>

                    <NotificationIconArea>
                        <NotificationIcon width="32" height="32"/>
                    </NotificationIconArea>
                    
                </HeadArea>   

                <NotificationsArea>

                    <Text style={{fontSize:18 ,color:'#6F7173'}}>Get Started</Text>

                    <NotificationBox>

                        <NotificationBoxMessage>
                            <Text style={{fontSize:20 ,color:'#ffffff'}} >Finalize your registration</Text>
                            <Text style={{fontSize:14 ,color:'#ffffff'}}>And advertise your profile right now</Text>
                        </NotificationBoxMessage>

                        <AlertIcon/>

                    </NotificationBox>
 
                </NotificationsArea>     

                <NearToArea>

                    <Text style={{fontSize:18 ,color:'#5F9CAF', paddingBottom:15}}>Near to you</Text>

                    <Swiper
                            style={{height: 130}}
                            showsPagination={false}
                            showsButtons={false}
                            prevButton={<NavPrevIcon width="35" height="35" fill="#000000"/>}
                            nextButton={<NavNextIcon width="35" height="35" fill="#000000"/>}
                        >                          
                                <NearToItem>
                                    <NearToInfo>
                                        <NearToName>Two children for a weekend</NearToName> 
                                    </NearToInfo>
                                    <NearToBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit</NearToBody>

                                    <FooterArea>

                                        <RectOne>
                                            <Text style={{color:'#ffffff'}}>Baby sitter</Text>
                                        </RectOne>

                                        <RectTwo>
                                            <Text style={{color:'#ffffff'}}>Preschool</Text>
                                        </RectTwo>

                                        <PriceArea>
                                            <Text  style={{color:'#F1C38D',fontSize:18, fontWeight:'bold'}}>$ 25/h</Text>
                                        </PriceArea>

                                    </FooterArea>

                                </NearToItem>



                                <NearToItem>
                                    <NearToInfo>
                                        <NearToName>Five children for a Friday</NearToName> 
                                    </NearToInfo>
                                    <NearToBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit</NearToBody>

                                    <FooterArea>

                                        <RectOne>
                                            <Text style={{color:'#ffffff'}}>Baby</Text>
                                        </RectOne>

                                        <RectTwo>
                                            <Text style={{color:'#ffffff'}}>Preschool</Text>
                                        </RectTwo>

                                        <PriceArea>
                                            <Text  style={{color:'#F1C38D',fontSize:18, fontWeight:'bold'}}>$ 39/h</Text>
                                        </PriceArea>

                                    </FooterArea>

                                </NearToItem>



                                <NearToItem>
                                    <NearToInfo>
                                        <NearToName>One children for six weekend</NearToName> 
                                    </NearToInfo>
                                    <NearToBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit</NearToBody>

                                    <FooterArea>

                                        <RectOne>
                                            <Text style={{color:'#ffffff'}}>Jung</Text>
                                        </RectOne>

                                        <RectTwo>
                                            <Text style={{color:'#ffffff'}}>Preschool</Text>
                                        </RectTwo>

                                        <PriceArea>
                                            <Text style={{color:'#F1C38D',fontSize:18, fontWeight:'bold'}}>$ 10/h</Text>
                                        </PriceArea>

                                    </FooterArea>

                                </NearToItem>

                                 
                         
                        </Swiper> 
                    
                </NearToArea> 

            </Container>
 
        </ScrollArea>
    );
}