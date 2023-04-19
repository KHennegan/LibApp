import React, {useState} from 'react'
import {View, 
    Text, 
    Image, 
    StyleSheet,
    useWindowDimensions,
    ScrollView
} from 'react-native'
import Logo from '../../../assets/images/temp_logo2.jpeg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';


const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    
    const onSignInPressed = () => {
        console.warn("Sign in");
    }

    const onRegisterPressed = () => {
        console.warn("Register")
    }
    const onSignInApple = () => {
        console.warn("Sign in Apple")
    }
    const onSignInFacebook = () => {
        console.warn("Sign in Facebook")
    }
    const onSignInGoogle = () => {
        console.warn("Sign in Google")
    }
    const onSignUpPressed = () => {
        console.warn("Sign Up")
    }
    return (
        <ScrollView showsVerticlaScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Create an account</Text>
            
            <CustomInput 
              placeholder="Username" 
              value={username} 
              setValue={setUsername}
            />
            <CustomInput 
              placeholder="Email" 
              value={email} 
              setValue={setEmail}
            />
            <CustomInput 
              placeholder="Password" 
              value={password}
              setValue={setPassword}
              secureTextEntry={true}
            />
            <CustomInput 
              placeholder="Confirm Password" 
              value={passwordRepeat} 
              setValue={setPasswordRepeat}
            />


            <CustomButton
              text="Register"
              onPress={onRegisterPressed}
            />
          
          <Text style={styles.text}>
            By registering, you confirm that you accept our 
              <Text style={styles.link}> Terms of Use </Text>
               and 
              <Text style={styles.link}> Privacy Policy</Text>
          </Text>

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
    },
    logo: {
        width: '70%',
        maxWidth: 500,
        maxHeight: 500,
        
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    }
});

export default SignUpScreen;