import React, { useState } from "react"
import { Text, ImageBackground, StyleSheet, View } from "react-native"
import Forecast from "./Forecast";

export default function weather(props){
    const [forecastInfo , setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })

    return (
        <View>             
            <ImageBackground source={require('../sky.jpg')} style={styles.backdrop}>                 
                <Text>Zip Code is {props.zipCode}</Text>                                 
                <Forecast {...forecastInfo} />             
            </ImageBackground>         
        </View> 
    );
}

const styles = StyleSheet.create({     
    backdrop: {                 
        width: '100%',         
        height: '100%',     
        alignItems: 'center'
       
    }, 
}); 