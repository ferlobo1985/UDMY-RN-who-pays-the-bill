import { Button, Pressable, StyleSheet, Text } from "react-native";
import { AppStyles } from "../../constants/styles";

export default function AppButton(props){
    return(
        <Pressable
            style={({pressed})=>[
                styles.buttonStyle,
                {backgroundColor: pressed ?
                    props.backColorPress:
                    props.backColor
                },
                props.customStyle
            ]}
            {...props}
        >
            <Text style={{ fontSize:20, color:'white'}}>
                {props.text}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonStyle:{
        borderColor:AppStyles.color.airBlue,
        borderRadius:8,
        padding:10,
        alignItems:'center',
        marginBottom:10,
        borderWidth:1
    }
})