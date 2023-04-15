import React from 'react'
import {View, Text, StyleSheet, Pressable} from 'react-native'

const CustomButton = ({onPress, text, type = "PRIMARY", bgColor, fgColor}) => {
    return (
        <Pressable onPress={onPress} 
        style={[
            styles.containter, 
            styles['container_'+type],
            bgColor ? {backgroundColor: bgColor} : {} //will override bgColor in other styles if passed in
        ]}>
            <Text
             style={[
                styles.text, 
                styles['text_'+type],
                fgColor ? {color: fgColor} : {}
            ]}>
                {text}
            </Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    containter: {
        width: '100%',
        
        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: '#3B71F3',

    },
    container_TERTIARY: {

    },

    text: {
        fontWeight: 'bold',
        color: 'white',
    },

    text_TERTIARY: {
        color: 'grey',
    }

});

export default CustomButton;