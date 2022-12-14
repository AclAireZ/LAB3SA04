import React, { useState, useEffect } from "react"
import { Text, ImageBackground, StyleSheet, View } from "react-native"
import Forecast from "./Forecast";
import Constants from 'expo-constants'
import { JumpingTransition } from "react-native-reanimated";

export default function weather(props){
    const [forecastInfo , setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0,
        pressure: 0,
        humidity: 0,
        temp_min: 0,
        temp_max: 0
        
    })

     useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode){
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=1847c7ae908aa5a3e85fb717cc67e4ed`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        temp1: json.main.temp_min,
                        temp2: json.main.temp_max,
                        pres: json.main.pressure,
                        humidity: json.main.humidity,
            
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
        }, [props.zipcode])

    return (
                    
            <ImageBackground source={require('../sky.jpg')} style={styles.backdrop}> 
                <View style ={styles.highlight}> 
                    <Text style = {styles.textStyle}>Zip Code is {props.zipCode}</Text>                                 
                    <Forecast {...forecastInfo} />  
                </View>
            </ImageBackground>         
         
    );
}

const styles = StyleSheet.create({     
    backdrop: {  
        flexDirection : 'column',
        alignItems: 'center',

        width: '100%',         
        height: '100%',     
       
    }, 

    highlight: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '90%',
        height: '90%',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        borderWidth: 2,
        borderRadius: 10 
    },

    textStyle: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
}); 