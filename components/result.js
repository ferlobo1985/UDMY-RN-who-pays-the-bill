import { Modal, Text, View,StyleSheet } from "react-native";
import { AppStyles } from "../constants/styles";
import AppButton from "./ui/button";

export default function Result({state,resetApp}){
    return(
        <Modal
            animationType="slide"
            visible={state.modal}
        >
           <View style={styles.modalView}>
                <Text style={{fontSize:50,color:'white'}}>
                    The looser is:
                </Text>
                <Text style={{fontSize:30,color:'white'}}>
                    { state.result }
                </Text>

                <AppButton
                    text="Start over"
                    onPress={resetApp}
                    backColor={AppStyles.color.darkBlue}
                    backColorPres={AppStyles.color.airBlue}
                    customStyle={{
                        marginTop:20
                    }}
                />

           </View>
        </Modal>
    )
}

const styles= StyleSheet.create({
    modalView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:AppStyles.color.darkBlue
    }
})