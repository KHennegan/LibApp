import React from 'react'
import {SafeAreaView, View, Text } from 'react-native'

import LoginSVG from '../image.svg'

const LoginScreen = () => {
    return (
    <SafeAreaView style={{flex:1,justifyContent:'center'}}>
        <View style={{alignItems:'center'}}>
            <LoginSVG 
                height={300} 
                width={300} 
            />
        </View>
        <Text style={{fontFamily:''}}>Login Screen</Text>
    </SafeAreaView>
    )
}

export default LoginScreen
