import React, {useState, useRef} from 'react';
import {Modal, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import BoxDisponibility from '../../../../components/BoxDisponibility.js'
import GenericButton from '../../../../components/GenericButton.js'
import AddDisponibility from './AddDisponibility';
import {Modalize} from 'react-native-modalize'
import { Container,
         TextTitle } from './styles';
import MessageConfirm from "../../../../components/MessageConfirm";

disponibility = {
            data: [
            { key: "00",
              description: "Monday - Thursday",
              interval: "8:00am - 4:00pm"},

            { key: "01",
              description: "Saturday - Sunday",
              interval: "3:00pm - 8:00pm"},

            { key: "02",
              description: "Fryday - Fryday",
              interval: "3:00pm - 12:00pm"},


            ]
        };

export default () => {

// const modalizeRef = useRef(null);
//
// function onOpen(){
//     modalizeRef.current?.open()
// }

    const [isModalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(!isModalVisible)

    }


    if ( isModalVisible ){

        modal = <AddDisponibility/>


    }else{
        modal = <Text/>
    }

return (
    <Container>
 
        {this.disponibility.data.map((item, index) => {
            return (  
                <BoxDisponibility key={index} 
                                 description={item.description}
                                  interval={item.interval}/>
            );
            })}

         

        <GenericButton onPress={openModal}
                        text="New Range"  
                        color='#FFFFFF' 
                        backgroundColor='#3EC5F0'
                        borderColor='#3EC5F0'/>

        {/*<Modalize*/}
        {/*    ref={modalizeRef}*/}
        {/*    snapPoint={600}*/}
        {/*>*/}

        {/*    <AddDisponibility/>*/}

        {/*</Modalize>*/}

        {modal}

        
  
    </Container>
);
}