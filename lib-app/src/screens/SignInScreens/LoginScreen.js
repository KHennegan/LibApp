import React from 'react'
import {SafeAreaView, View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native'

import LoginSVG from '../image.svg';

const LoginScreen = () => {
    const {height} = useWindowDimensions();
    return (
    <SafeAreaView style={{flex:1,justifyContent:'center'}}> 
        <View style={styles.root}>
            <Image source={LoginSVG} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain'/>
        </View>
        <Text style={{fontFamily:'',fontSize:28,fontWeight:'500',color:'#33',marginBottom: 30,
    }}>Login Screen</Text>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        alighnItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
});

export default LoginScreen
