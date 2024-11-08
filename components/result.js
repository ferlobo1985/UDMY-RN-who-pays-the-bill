import { Modal, Text } from "react-native";

export default function Result({state,resetApp}){
    return(
        <Modal
            animationType="slide"
            visible={state.modal}
        >
            <Text>{state.result}</Text>
        </Modal>
    )
}