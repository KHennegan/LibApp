import React, {useState} from 'react'
import {View, 
    Text, 
    Image, 
    StyleSheet,
    ScrollView
} from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/;
const CONFRIM_CODE_REGEX = /[a-zA-Z0-9]{6}/;

const ResetPasswordScreen = () => {

    const navigation = useNavigation();

    const {
      control, 
      handleSubmit, 
      formState: {errors}
  } = useForm();
  
    const onSubmitPressed = (data) => {
      console.warn(data);
      navigation.navigate("HomeScreen");
    }
    const onSignInPressed = () => {
      navigation.navigate("SignIn");
    }
    const onResendPressed = () => {
      //resend code
      console.warm("Resend code");
    }
  


    return (
        <ScrollView showsVerticlaScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Reset Your Password</Text>
            
            <CustomInput 
              name="confirmationCode"
              placeholder="Enter your confirmation code" 
              control={control}
              rules={{
                required: "Please enter a valid confirmation code",
                minLength: {
                  value: 6,
                  message: "Confirmation codes should be 6 characters long"
                },
                maxLength: {
                  value: 6,
                  message: "Confirmation codes should be 6 characters long"
                },
                pattern: {
                  value: CONFRIM_CODE_REGEX,
                  message: "Confirmation codes should only contain digits and letters"
                }
              }}
            />
             <CustomInput 
              name="newPassword"
              placeholder="Enter your new password" 
              control={control}
              secureTextEntry={true}
              rules={{
                required: "A new password is required",
                minLength: {
                  value: 8,
                  message: "Passwords should be at least 8 characters long"
                },
                pattern: {
                  value: PASSWORD_REGEX,
                  message: "Your password must contain at least one letter, one number, and one special character (@$!%*#?&)"
                }

              }}
            />
            <CustomButton
              text="Submit"
              onPress={handleSubmit(onSubmitPressed)}
            />
            <CustomButton
              text="Resend Code"
              onPress={onResendPressed}
              type="SECONDARY"
            />
            <CustomButton
              text="Back to sign in"
              onPress={onSignInPressed}
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
    },
    text: {
        color: 'gray',
        marginVertical: 10,
        
    },
    link: {
      color: '#FDB075'

    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    }
});

export default ResetPasswordScreen;