import React from 'react';
import { Text } from 'react-native';
import { Container,
         HeaderArea,
         ButtonBackArea,
         TitleArea,
         TextTitle,
         BodyArea,
         TitleBodyArea,
         ListCertificationsArea,
         FooterArea,
         CertificationButton,
         CertificationIcon,
         CertificationText
         } from './styles';

import NavPrevIcon from '../../../assets/nav_prev.svg';
import CheckCircle from '../../../assets/check-circle.svg';

import ButtonNext from '../../../components/ButtonNext'

export default () => {
    return (
        <Container>

            <HeaderArea>

                <ButtonBackArea>
                    <NavPrevIcon fill="#FFFFFF"/>  
                </ButtonBackArea>
                
                <TitleArea>
                    <TextTitle>Checklist</TextTitle>
                </TitleArea>

            </HeaderArea>

            <BodyArea>

                <TitleBodyArea>

                    <Text style={{color:'#5F9CAF', fontSize:24}}>Documentation</Text>

                </TitleBodyArea>

                <ListCertificationsArea>

                    <CertificationButton>
                        <CertificationText>
                            <Text style={{color:'#5F9CAF', fontSize:18}}>Police check</Text>
                        </CertificationText>

                        <CertificationIcon>
                            <CheckCircle/>
                        </CertificationIcon>
                    </CertificationButton>

                </ListCertificationsArea>

            </BodyArea>

            <FooterArea>
                <ButtonNext/>
            </FooterArea>


        </Container>
    );
}