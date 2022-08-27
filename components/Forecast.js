import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default function Forecast(props) {
    return (
        <View style = {styles.container} >
            <Text style = {styles.textMain}>{props.main}</Text>

            <View style = {styles.container}>
                <Text style = {styles.textStyle}>{props.description}</Text>
            </View>

            <View View style = {styles.container}>
                <Text style = {styles.textM0}>{props.temp}°C</Text>
            </View>

            <View View style = {styles.container}>
                <Text style = {styles.textM0}>{props.pres} Pascal</Text>
            </View>

        </View>
    );

    
}
const styles = StyleSheet.create({

        container: {
            alignItems: 'center',
            paddingTop: Constants.statusBarHeight
    
    
        },
    
        textStyle: {
            fontSize: 20,
            color: 'white',
            textAlign: 'center'
        },

        textMain: {
            fontSize: 35,
            color: 'white',
            textAlign: 'center'
        },
    
        textM0: {
            fontSize: 35,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center'
    
        }
    })