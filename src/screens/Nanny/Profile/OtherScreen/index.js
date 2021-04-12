import React, {useState} from 'react';
import { Text } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import VaccinationBox from '../../../../components/VaccinationBox.js'
import BoxWorkHistory from '../../../../components/BoxWorkHistory.js'

import { Container,   
         TextTitle,
         MiniTitle,
         VaccinationArea,
         WorkHistoryArea,
         SwapperArea,
         ScrollArea
        } from './styles';
import Carousel from "react-native-snap-carousel";
import BoxDisponibility from "../../../../components/BoxDisponibility";
  

export default () => {


const navigation = useNavigation();

    vaccination = {
        data: [
            { id: "00",
                text: "Influenza" },

            { id: "01",
                text: "Whooping cough" },

            { id: "02",
                text: "Chickenpox" },

            { id: "03",
                text: "Shingles" }
        ]
    };


    workHisotry = {
        data: [
            { key: "00",
                description: "Emma Soarez",
                interval: "2018 - 2019 - New York, EUA"},

            { key: "01",
                description: "Saturday - Sunday",
                interval: "2018 - 2019 - New York, EUA"},


            { key: "02",
                description: "Fryday - Fryday",
                interval: "2018 - 2019 - New York, EUA"},


        ]
    };

    return (

        <ScrollArea>

            <MiniTitle>Vaccination</MiniTitle>

            <VaccinationArea>

                <SwapperArea>

                    <Carousel
                        sliderWidth={400}
                        itemWidth={135}
                        loop={true}
                        enableSnap={false}
                        // inactiveSlideScale={0.8}
                        // inactiveSlideOpacity={0.3}
                        activeSlideAlignment={'start'}
                        data={this.vaccination.data}
                        // contentContainerCustomStyle={{  alignItems: 'center' }}
                        // lockScrollWhileSnapping={true}
                        // autoplay={true}
                        // autoplayDelay={500}
                        // autoplayInterval={3000}

                        renderItem={({ item }) => {

                            backgroundColor = '#8EE1BE'
                            textColor = '#FFFFFF'

                            return (
                                <VaccinationBox text={item.text}
                                                backgroundColor={backgroundColor}
                                                textColor={textColor}/>
                            );
                        }}
                    />
                </SwapperArea>
            </VaccinationArea>

            <MiniTitle>Work history</MiniTitle>

            <WorkHistoryArea>
                {this.workHisotry.data.map((item, index) => {
                    return (
                        <BoxWorkHistory key = {item.key}
                                        description={item.description}
                                         interval={item.interval}/>
                    );
                })}


            </WorkHistoryArea>

        </ScrollArea>

);
}