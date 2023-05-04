import React, {useState} from 'react'
import {View, 
    Text, 
    Image, 
    StyleSheet,
    ScrollView
} from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

const COLORS = {
  GREEN: '#CCE8CC',
  BLUE: '#7899D4',
  PINK: '#FFB2CD',
  PURPLE: '#C5ADFF',
  GREY: '#5B5B5B'
}

const EMAIL_REGEX = /\w+[@]\w+(\.[A-Za-z]{2,3})$/
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/

const SignUpScreen = () => {
    const navigation = useNavigation();
    const {
      control, 
      handleSubmit, 
      formState: {errors},
      watch
  } = useForm();

    const pwd = watch('password');

    const onRegisterPressed = () => {
        navigation.navigate("ConfirmEmail");
    }
    
    const onSignInPressed = () => {
      navigation.navigate("SignIn");
    }
    const onTermsOfUsePressed = () => {
      console.warm("Terms of Use");
    }
    const onPrivacyPressed = () => {
      console.warn("Privacy Policy");
    }


    return (
        <ScrollView showsVerticlaScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Create an account</Text>
            
            <CustomInput
              name="username" 
              placeholder="Username"
              control={control} 
              rules={{
                required: 'Username is required',
                minLength: {
                    value: 3, 
                    message: 'Username should be minimum 3 characters'
                },
                maxLength: {
                  value: 24,
                  message: 'Username can only be 24 characters long'
                },
                pattern: {
                  value: /[a-zA-Z]\w+/,
                  message: 'Usernames must start with a letter and contain only digits and numbers'
                }
              }}
            />
            <CustomInput
              name="email" 
              placeholder="Email" 
              control={control}
              rules={{
                required: 'Email is required',
                minLength: {
                    value: 6, 
                    message: 'Please enter a valid email address'
                },
                pattern: {
                    value: EMAIL_REGEX,
                    message: 'Please enter a valid email address'
                }
              }}
            />
            <CustomInput 
              name="password"
              placeholder="Password"
              control={control} 
              secureTextEntry={true}
              rules={{
                required: 'Password confirmation is required',
                minLength: {
                    value: 8, 
                    message: 'Password should be minimum 8 characters',
                },
                pattern: {
                  value: PASSWORD_REGEX,
                  message: "Your password must contain at least one letter, one number, and one special character (@$!%*#?&)"
                }
              }}
            />
            <CustomInput 
              name="confirmPassword"
              placeholder="Confirm Password"
              control={control} 
              secureTextEntry={true}
              rules={{
                validate: value =>
                  value == pwd || 'Password does not match',
                required: 'Password confirmation is required',
                }
              }
            />

            <CustomButton
              text="Register"
              onPress={handleSubmit(onRegisterPressed)}
            />


          <Text style={styles.text}>
            By registering, you confirm that you accept our 
              <Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of Use </Text>
               and 
              <Text style={styles.link} onPress={onPrivacyPressed}> Privacy Policy</Text>
          </Text>

          <SocialSignInButtons/>

          <CustomButton
            text="Have an account? Sign in"
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
      color: COLORS.PURPLE//'#FDB075'

    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: COLORS.BLUE,//'#051C60',
        margin: 10,
    }
});

export default SignUpScreen;