import React, {useEffect} from 'react';
import {View} from "react-native";
import RNPickerSelect, {Item} from "react-native-picker-select";
import {pickerStyle} from "./CustomPickerSelect.styles";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Evillcons from 'react-native-vector-icons/EvilIcons';
// @ts-ignore
import {Chevron} from 'react-native-shapes';

interface customPickerProps {
    value: string | number | null;
    onValueSelect: (value: any, index: number) => void;
    pickers: Item[];
    placeholderLabel: string;
    isError?: boolean;
}

export const CustomPickerSelect = (props: customPickerProps) => {
    const placeholder = {label: props.placeholderLabel, value: null, color:"#9EA0A4"};

    return (
        <RNPickerSelect
            value={props.value}
            onValueChange={props.onValueSelect}
            // style={pickerStyle}
            useNativeAndroidPickerStyle={false}
            items={props.pickers}
            placeholder={placeholder}
            Icon={() =>
                <Chevron size={1.5} color="gray"/>
            }
            style={props.isError ? {
                ...pickerStyle,
                inputAndroid: {...pickerStyle.inputAndroid, borderColor: 'red'},
                inputIOS: {
                    ...pickerStyle.inputIOS
                    , borderColor: 'red'
                }
            } : pickerStyle}

        />
    );
};

