import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {useForm} from "react-hook-form";
import {ItemValue} from "@react-native-community/picker/typings/Picker";
import {contentStyles, pickerStyle} from "./ContentInfo.css";
import {PickerValue} from "./interfaces";
import {manga, Sex} from "./constants/defaultValues";
import RNPickerSelect from 'react-native-picker-select';

const ContentInfo = () => {
    const [sexValue, setSexValue] = useState('Choose Value');
    const [mangaValue, setMangaValue] = useState<string | null>("");

    const [robotName, setRobotName] = useState('');

    const {register, setValue, handleSubmit} = useForm();
    const [mangaPickers, setMangaList] = useState<PickerValue[] | undefined>();
    useEffect(() => {
        const mangaPickers = manga.map((valuePicker) => {
            return {label: valuePicker, value: valuePicker};
        });
        setMangaList(mangaPickers);
    }, []);
    useEffect(() => {
        register('Name');
        register('SecondName');
    }, [register]);

    const renderManga = () => {
        console.log("RENDER MANGA");
        console.log(mangaValue);
        return (
            mangaPickers && <RNPickerSelect
                value={mangaValue}
                onValueChange={(value) => {
                    setMangaValue(value);
                    console.log(value);
                }}
                items={mangaPickers}
                placeholder={{label: "Select a manga", value: null, color: '#9EA0A4'}}
                style={pickerStyle}
            />

        );
    };

    const renderSex = () => {
        return (
            <Picker
                selectedValue={sexValue}
                onValueChange={(itemValue: ItemValue, itemIndex: number) => {
                    setSexValue(itemValue.toString());
                    console.log(itemValue);
                }}>
                <Picker.Item label="ChooseValue" value=""/>
                {
                    Sex.map((value) => {
                        return (<Picker.Item label={value} value={value} key={value}/>)
                    })
                }

            </Picker>
        );
    };
    const onApply = (data: any) => {
        const appliedData = JSON.stringify(data);
        console.log(appliedData);
    };
    const renderApplyButton = () => {
        return (
            <TouchableOpacity
                style={contentStyles.buttonApply}
                onPress={handleSubmit(onApply)}
            >
                <Text>Press Here</Text>
            </TouchableOpacity>);
    };

    const renderInformationInput = () => {
        return (
            <View style={contentStyles.informationInput}>
                {renderSex()}
                {renderManga()}
                <View style={{marginBottom: 5}}>
                    <Text style={{fontWeight: 'bold'}}> Name</Text>
                    <TextInput
                        style={contentStyles.textInput}
                        onChangeText={(text) => {
                            setValue('Name', text);
                            setRobotName(text);
                        }}
                    />
                </View>
                {renderApplyButton()}
            </View>
        );
    };
    const renderContainInfo = () => {
        return (
            <View
                style={contentStyles.infoContainer}
            >
                <View>
                    <Text> Name:</Text>
                    <Text>{robotName}</Text>
                </View>
            </View>
        );
    };
    return (
        <View
            style={contentStyles.wholeContainer}
        >
            {renderContainInfo()}
            {renderInformationInput()}
        </View>
    );
};
export default ContentInfo;
