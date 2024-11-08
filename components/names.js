import { useState } from 'react'
import { Alert, Button, Keyboard, StyleSheet, Text, TextInput, View} from 'react-native'
import { AppStyles } from '../constants/styles';


import AppButton from './ui/button';

const DEFAULTS = {
    modal:false,
    inputName:'',
    names:[],
    result:''
}

export default function Names(){
    const [state, setState ] = useState(DEFAULTS)
    const handleInput = (value)=> setState({...state,inputName:value})
    const handleState = (props)=> setState({...state,...props})

    const addNamesToList = () => {
        const userName = state.inputName;
        const validate = validateHandler(userName);
        if(!validate.error){
            /// ADD NAME TO ARRAY
            handleState({
                names:[...state.names,userName],
                inputName:''
            })
            Keyboard.dismiss()
        } else {
            /// SHOW ERROR
            Alert.alert(validate.message)
        }
    }

    const validateHandler = (value) => {
        if(value === ''){
            return {error:true, message:'Sorry, no empty name'}
        }
        if(state.names.includes(value)){
            return {error:true, message:'Sorry, names must be unique'}
        }
        return true
    }
 

    return(
        <View style={{width:'80%'}}>
            {/* INPUT BUTTON */}
            <>
                <TextInput
                    value={state.inputName}
                    onChangeText={(value)=>handleInput(value)}
                    style={styles.input}
                />
                <AppButton
                    text='Add name'
                    onPress={()=> addNamesToList()}
                    backColor={AppStyles.color.airBlue}
                    backColorPress={AppStyles.color.darkBlue}
                />
            </>

            <Text style={{fontSize:30}}>
                {JSON.stringify(state,null,'\t')}
            </Text>


        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        borderRadius:8,
        fontSize:20,
        marginBottom:20,
        borderColor: AppStyles.color.airBlue,
        borderWidth:1,
        padding:10,
        backgroundColor:'#fff'
    }
})