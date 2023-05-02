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

const COLORS = {
  GREEN: '#CCE8CC',
  BLUE: '#7899D4',
  PINK: '#FFB2CD',
  PURPLE: '#C5ADFF',
  GREY: '#5B5B5B'
}

const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');

    const navigation = useNavigation();
    const {
      control, 
      handleSubmit, 
      formState: {errors}
  } = useForm();


    const onConfirmPressed = () => {
      //validate code
      navigation.navigate("HomeScreen");
    }
    const onSignInPressed = () => {
      navigation.navigate("SignIn");
    }
    const onResendPressed = () => {
      //resend a code
      console.warn('onResendPress');
    }
  

//TODO: make view minlength of screen
    return (
        <ScrollView showsVerticlaScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Confirm Your Email</Text>
            
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
                  value: /[a-zA-Z0-9]{6}/,
                  message: "Confirmation codes should only contain digits and letters"
                }
              }}
            />
            <CustomButton
              text="Confirm"
              onPress={handleSubmit(onConfirmPressed)}
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
        backgroundColor: COLORS.GREEN,
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
        color: COLORS.BLUE, //'#051C60',
        margin: 10,
    }
});

export default ConfirmEmailScreen;