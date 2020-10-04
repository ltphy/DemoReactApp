import {Alert, Modal, TouchableHighlight, View, Text} from "react-native";
import React, {useState} from "react";
import {modalStyles} from "./ModalContext.styles";

interface ModalContextProps {
    content: string;
    onRequestClose?: () => void;
    modalVisible: boolean;
    setClose: () => void;
}

export const ModalContext = (props: ModalContextProps) => {
    return (
        <View>
            <Modal animationType="fade"
                   transparent={true}
                   visible={props.modalVisible}
                   onRequestClose={() => {
                       Alert.alert("Modal has been closed");
                       props.onRequestClose;
                   }}
            >
                <View style={modalStyles.centeredView}>
                    <View style={modalStyles.modalView}>
                        <Text style={modalStyles.modalText}>{props.content}</Text>
                        <TouchableHighlight
                            style={modalStyles.hideButton}
                            onPress={props.setClose}
                        >
                            <Text style={modalStyles.hideText}>Continue</Text>
                        </TouchableHighlight>
                    </View>
                </View>

            </Modal>
        </View>
    );
};
