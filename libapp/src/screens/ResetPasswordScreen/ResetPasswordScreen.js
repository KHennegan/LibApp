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


const ResetPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const navigation = useNavigation();

    const onSubmitPressed = () => {
      navigation.navigate("HomeScreen");
    }
    const onSignInPressed = () => {
      navigation.navigate("SignIn");
    }
    const onResendPressed = () => {
      //resend code
      console.warm("Terms of Use");
    }
  


    return (
        <ScrollView showsVerticlaScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Reset Your Password</Text>
            
            <CustomInput 
              placeholder="Enter your confirmation code" 
              value={code} 
              setValue={setCode}
            />
             <CustomInput 
              placeholder="Enter your new password" 
              value={newPassword} 
              setValue={setNewPassword}
            />
            <CustomButton
              text="Submit"
              onPress={onSubmitPressed}
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