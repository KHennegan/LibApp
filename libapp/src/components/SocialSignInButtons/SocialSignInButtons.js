import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../CustomButton';

const onSignInApple = () => {
    console.warn("Sign in Apple");
}
const onSignInFacebook = () => {
    console.warn("Sign in Facebook");
}
const onSignInGoogle = () => {
    console.warn("Sign in Google");
}

const SocialSignInButtons = () => {
    return(
        <>
            <CustomButton
              text="Sign in with Google"
              onPress={onSignInGoogle}
              bgColor="#FAE9EA"
              fgColor="#DD4D44"
            />
            <CustomButton
              text="Sign in with Apple"
              onPress={onSignInApple}
              bgColor="#e3e3e3"
              fgColor="#363636"
            />
            <CustomButton
              text="Sign in with Facebook"
              onPress={onSignInFacebook}
              bgColor="E7EAF4"
              fgColor="#4765A9"
            />
        </>
    )
}

export default SocialSignInButtons