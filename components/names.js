import { useState } from 'react'
import { Alert, Button, FlatList, Keyboard, Pressable, StyleSheet, Text, TextInput, View} from 'react-native'
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

    const removeName = (index) => {
        let names = [...state.names];
        names.splice(index,1);

        handleState({
            names
        })
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


            {/* LIST OF NAMES */}
            { state.names && 
                <FlatList
                    style={{marginBottom:20,maxHeight:300}}
                    data={state.names}
                    renderItem={({item,index})=>{
                        return(
                            <Pressable
                                style={styles.nameItem}
                                onPress={()=> removeName(index)}
                            >
                                <Text style={{padding:10,fontSize:20}}>
                                    {item}
                                </Text>
                            </Pressable>
                        )
                    }}
                    keyExtractor={(item)=> item}
                />
            }



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
    },
    nameItem:{
        borderColor:AppStyles.color.airBlue,
        borderWidth:1,
        borderRadius:8,
        marginBottom:5,
        marginRight:5,
        alignItems:'center'
    }
})