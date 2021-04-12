import React, {useState} from 'react';
import {Modal, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Container,
         HeaderArea,
         DayArea,
         HourArea,
         PreviewArea,
         FooterArea,
         TextTitle,
         MiniTitle,
         ModalScreen} from './styles';
import {useNavigation} from "@react-navigation/native";
import BoxDisponibility from "../../../../../components/BoxDisponibility";
import GenericButton from "../../../../../components/GenericButton";

export default () => {

    const [isModalVisible, setModalVisible] = useState(true);


    // Create toggleModalVisibility function that will
    // Open and close modal upon button clicks.
    const toggleModalVisibility = () => {
        setModalVisible(!isModalVisible);
    };

    daysOfWeek=[{label: 'Day', value: 'day', selected: true, hidden: true},
        {label: 'Sunday', value: '01'},
        {label: 'Monday', value: '02'},
        {label: 'Tuesday', value: '03'},
        {label: 'Wednesday', value: '04'},
        {label: 'Thursday', value: '05'},
        {label: 'Friday', value: '06'},
        {label: 'Saturday', value: '07'} ]

    hours=[{label: 'Hour', value: 'hour', selected: true},
        {label: '01', value: '01'},
        {label: '02', value: '02'},
        {label: '03', value: '03'},
        {label: '04', value: '04'},
        {label: '05', value: '05'},
        {label: '06', value: '06'},
        {label: '07', value: '07'} ]

return (

    <Modal animationType="slide"
           transparent visible={isModalVisible}
           presentationStyle="overFullScreen"
           onDismiss={toggleModalVisibility}>

        <ModalScreen>
            <Container>

                <HeaderArea>
                    <TextTitle>New Range</TextTitle>
                </HeaderArea>

                <MiniTitle>Days</MiniTitle>

                <DayArea>

                    <DropDownPicker
                        items={daysOfWeek}
                        containerStyle={{height: 70, width: '50%', marginRight: 10, paddingBottom: 10, marginTop:10}}
                        itemStyle={{
                            justifyContent: 'flex-start',
                            fontSize:12
                        }}
                    />

                    <DropDownPicker
                        items={daysOfWeek}
                        containerStyle={{height: 70, width: '50%', marginRight: 10, paddingBottom: 10, marginTop:10}}
                        itemStyle={{
                            justifyContent: 'flex-start',
                            fontSize:12
                        }}
                    />

                </DayArea>

                <MiniTitle>Hours</MiniTitle>

                <HourArea>

                    <DropDownPicker
                        items={hours}
                        containerStyle={{height: 70, width: '50%', marginRight: 10, paddingBottom: 10, marginTop:10}}
                        itemStyle={{
                            justifyContent: 'flex-start',
                            fontSize:12
                        }}
                    />

                    <DropDownPicker
                        items={hours}
                        containerStyle={{height: 70, width: '50%', marginRight: 10, paddingBottom: 10, marginTop:10}}
                        itemStyle={{
                            justifyContent: 'flex-start',
                            fontSize:12
                        }}
                    />

                </HourArea>

                <MiniTitle>Preview</MiniTitle>

                <PreviewArea>

                    <BoxDisponibility description={'Monday - Thursday'}
                                      interval={'8:00am - 4:00pm'}/>

                </PreviewArea>

                <FooterArea>

                    <GenericButton onPress={toggleModalVisibility}
                                   text="Add Range"
                                   color='#FFFFFF'
                                   backgroundColor='#3EC5F0'
                                   borderColor='#3EC5F0'/>

                </FooterArea>
            </Container>
        </ModalScreen>

    </Modal>
);
}