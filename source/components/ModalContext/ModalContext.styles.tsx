import {StyleSheet, Text, View, TouchableOpacity} from "react-native";

export const modalStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modalText: {
        marginBottom: 20,
        textAlign: "center",
        fontSize: 20,
    },
    hideText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
    },
    hideButton: {
        backgroundColor: "#7579e7",
        borderRadius: 20,
        padding: 10,
        elevation: 5
    }
});
