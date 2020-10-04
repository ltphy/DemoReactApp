import {Alert, Modal, TouchableHighlight, View, Text} from "react-native";
import React, {useContext, useRef, useState} from "react";
import {modalStyles} from "./ModalContext.styles";

interface GenericModal {
    notifyError: (message: any) => void;

}

const defaultGenericModal: GenericModal = {
    notifyError: (message: any) => {
    },
};
export const GenericModalContext: React.Context<GenericModal> = React.createContext<GenericModal>(defaultGenericModal);

interface ModalContextProps {
    children: any;
}

export const ModalContext = (props: ModalContextProps) => {
    const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
    const messageRender = useRef<string | any>();
    const notifyError = (message: any) => {
        messageRender.current = message;
        setShowErrorModal(true);
    };
    const genericModal: GenericModal = {
        notifyError: notifyError,
    };
    return (
        <GenericModalContext.Provider value={genericModal}>
            {props.children}
            <Modal animationType="fade"
                   transparent={true}
                   visible={showErrorModal}
                // onRequestClose={() => {
                //     Alert.alert("Modal has been closed");
                //     props.onRequestClose;
                // }}
            >
                <View style={modalStyles.centeredView}>
                    <View style={modalStyles.modalView}>
                        {(typeof messageRender.current === "string") ? (
                            <Text style={modalStyles.modalText}>
                                {messageRender.current}
                            </Text>) : (messageRender.current)
                        }

                        <TouchableHighlight
                            style={modalStyles.hideButton}
                            onPress={() => setShowErrorModal(false)}
                        >
                            <Text style={modalStyles.hideText}>Continue</Text>
                        </TouchableHighlight>
                    </View>
                </View>

            </Modal>
        </GenericModalContext.Provider>
    );
};
export const useGenericModal = () => {
    return useContext<GenericModal>(GenericModalContext);
};
