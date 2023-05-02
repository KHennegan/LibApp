import React from 'react'
import {View, Text, StyleSheet, Pressable} from 'react-native'

const COLORS = {
    GREEN: '#CCE8CC',
    BLUE: '#7899D4',
    PINK: '#FFB2CD',
    PURPLE: '#C5ADFF',
    GREY: '#5B5B5B'
}

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
        backgroundColor: COLORS.PINK,//'#3B71F3',

    },
    container_SECONDARY: {
        borderColor: COLORS.PINK,//'#3B71F3',
        borderWidth: 2,
    },
    container_TERTIARY: {

    },

    text: {
        fontWeight: 'bold',
        color: 'white',
    },
    text_SECONDARY: {
        color: COLORS.GREY, //'#3B71F3',
    },

    text_TERTIARY: {
        color: COLORS.GREY, //'grey',
    }

});

export default CustomButton;