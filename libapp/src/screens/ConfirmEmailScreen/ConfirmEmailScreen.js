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


const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');

    const navigation = useNavigation();

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
  


    return (
        <ScrollView showsVerticlaScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Confirm Your Email</Text>
            
            <CustomInput 
              placeholder="Enter your confirmation code" 
              value={code} 
              setValue={setCode}
            />
            <CustomButton
              text="Confirm"
              onPress={onConfirmPressed}
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

export default ConfirmEmailScreen;