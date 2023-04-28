import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import {Controller} from 'react-hook-form';

const CustomInput = ({control, name, rules = {}, placeholder, secureTextEntry}) => {
    return (
        
        <Controller
          control={control} //using the control function from useForm function (see const vals)
          name={name} //name of field we're trying to manage
          rules={rules} //allows us to pass in the rules applicable to each custom input component we create
          render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
            <>
                <View style={[styles.container, {borderColor: error ? 'red' : '#e8e8e8'}]}> 
                <TextInput 
                value={value} 
                onChangeText={onChange} 
                onBlur={onBlur} 
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
                />
                </View> 
                {error && ( //creates conditional where Text element only appears if an error exists
                    <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text> //this will display our error message or the text string if the error message does not exist
                )}
            </> //Empty fragment makes a container so we only have one child element, instead of two (View and Text)
          )}
        /> //because our styles change depending on error,
        //we want our controller to be the root and our view container inside the render function
    );
};



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5, //makes corners round

        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {},
});

export default CustomInput;