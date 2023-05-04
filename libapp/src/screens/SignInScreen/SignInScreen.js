import React, {useState} from 'react'
import {View, 
    Text, 
    Image, 
    StyleSheet,
    useWindowDimensions,
    ScrollView,
    TextInput
} from 'react-native'
import Logo from '../../../assets/images/temp_logo2.jpeg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

const USER_REGEX = /[a-zA-Z]\w+/;

const COLORS = {
    GREEN: '#CCE8CC',
    BLUE: '#7899D4',
    PINK: '#FFB2CD',
    PURPLE: '#C5ADFF',
    GREY: '#5B5B5B'
}

const SignInScreen = () => {
    const {height} = useWindowDimensions(); //gets the dimensions of the phone screen to use
    const navigation = useNavigation();

    const {
        control, 
        handleSubmit, 
        formState: {errors}
    } = useForm();

    console.log(errors);

    const onSignInPressed = (data) => {
        //validate user
        console.log(data);
        navigation.navigate('HomeScreen');
    }

    const onForgotPasswordPressed = () => {
        navigation.navigate("ForgotPassword");
    }
    const onSignUpPressed = () => {
        navigation.navigate('SignUp');
    }
    return (
        <ScrollView showsVerticlaScrollIndicator={false}>
        <View style={styles.root}>
            <Image 
                source={Logo} 
                style={[styles.logo, {height: height * 0.3}]} 
                resizeMode="contain"
            />

            <CustomInput
              name="username" 
              placeholder="Username" 
              control={control}
              rules={{
                required: 'Username is required',
                minLength: {
                    value: 3,
                    message: "Usernames should be at least three characters long"
                },
                maxLength: {
                    value: 12,
                    message: "Usernames cannot exceede 12 characters in length"
                },
                pattern: {
                    value: USER_REGEX,
                    message: 'Usernames must start with a letter and contain only digits and numbers'
                }
            
              }} //this string becomes the error message
            />
            <CustomInput 
              name="password"
              placeholder="Password" 
              control={control}
              secureTextEntry={true}
              rules={{
                required: 'Password is required',
                minLength: {
                    value: 8, 
                    message: 'Password should be minimum 8 characters'
                }, //this object overwrites default error message when the validation paramter is not met
            }}

            />
            

            <CustomButton
              text="Sign in"
              onPress={handleSubmit(onSignInPressed)}
              //handleSubmit validates the input
            />
            <CustomButton
              text="Forgot Password?"
              onPress={onForgotPasswordPressed}
              type="TERTIARY"
            />

            <SocialSignInButtons/>

            <CustomButton
              text="Don't have an account? Create one"
              onPress={onSignUpPressed}
              type="TERTIARY"
            />
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: COLORS.GREEN,
    },
    logo: {
        width: '70%',
        maxWidth: 500,
        maxHeight: 500,
        
    },
});

export default SignInScreen;