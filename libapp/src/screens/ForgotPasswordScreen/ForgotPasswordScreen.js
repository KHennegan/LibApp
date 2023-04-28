import React, {useState} from 'react'
import {View, 
    Text, 
    Image, 
    StyleSheet,
    ScrollView
} from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');

    const navigation = useNavigation();

    const onSendPressed = () => {
        navigation.navigate("ResetPassword");
    }
    const onSignInPressed = () => {
      navigation.navigate("SignIn");
    }
    
  


    return (
        <ScrollView showsVerticlaScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Reset your Password</Text>
            
            <CustomInput 
              placeholder="Username" 
              value={username} 
              setValue={setUsername}
            />
            <CustomButton
              text="Send"
              onPress={onSendPressed}
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

export default ForgotPasswordScreen;