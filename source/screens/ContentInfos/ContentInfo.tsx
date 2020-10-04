import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {useForm} from "react-hook-form";
import {contentStyles} from "./ContentInfo.css";
import {manga, Sex} from "./constants/defaultValues";
import RNPickerSelect, {Item} from 'react-native-picker-select';
// @ts-ignore
import {Chevron} from 'react-native-shapes';
import {CustomPickerSelect} from "../../components/CustomPickerSelect";

const ContentInfo = () => {
    const [sexValue, setSexValue] = useState<string | null>('');
    const [mangaValue, setMangaValue] = useState<string | null>("");

    const [yourName, setYourName] = useState<string | null>("");
    const {register, setValue, handleSubmit} = useForm();
    const [mangaPickers, setMangaList] = useState<Item[] | undefined>();
    const [mangaError, setMangaError] = useState<boolean>(false);
    const [sexError, setSexError] = useState<boolean>(false);
    const [sexPickers, setSexPickersList] = useState<Item[] | undefined>();
    useEffect(() => {
        const mangaPickers = manga.map((valuePicker) => {
            return {label: valuePicker, value: valuePicker};
        });
        setMangaList(mangaPickers);

        const sexPickers = Sex.map((valuePicker) => {
            return {label: valuePicker, value: valuePicker};
        });
        setSexPickersList(sexPickers);
    }, []);
    useEffect(() => {
        register('Name');
        register('SecondName');
    }, [register]);

    const renderManga = () => {
        console.log("Manga Value: ", mangaValue);
        return (
            <View style={{marginBottom: 10}}>
                {
                    mangaPickers && <CustomPickerSelect
                        value={mangaValue}
                        onValueSelect={(value) => {
                            if (value !== mangaValue) {
                                setMangaValue(value);
                            }
                        }}
                        // style={pickerStyle}
                        pickers={mangaPickers}
                        placeholderLabel={"Select a manga"}
                        isError={mangaError}
                    />
                }
            </View>
        );
    };

    const renderSex = () => {
        return (
            <View style={{marginBottom: 10}}>
                {
                    sexPickers &&
                    <CustomPickerSelect value={sexValue}

                                        onValueSelect={(value) => {
                                            setSexValue(value);
                                        }}
                                        pickers={sexPickers}
                                        placeholderLabel={"Select Sex"}
                                        isError={sexError}/>
                }
            </View>
        );
    };
    const onApply = (data: any) => {
        const appliedData = JSON.stringify(data);
        if (!mangaValue && !mangaError) {
            setMangaError(true);
        } else if (mangaValue && mangaError) {
            setMangaError(false);
        }
        if (!sexValue && !sexError) {
            setSexError(true);
        } else if (sexValue && sexError) {
            setSexError(false);
        }
    };
    const renderApplyButton = () => {
        return (
            <TouchableOpacity
                style={contentStyles.buttonApply}
                onPress={handleSubmit(onApply)}
            >
                <Text>Apply</Text>
            </TouchableOpacity>);
    };

    const renderInformationInput = () => {
        return (
            <View style={contentStyles.informationInput}>
                {renderManga()}

                {renderSex()}
                <View style={{marginBottom: 5}}>
                    <Text style={{fontWeight: 'bold'}}> Name</Text>
                    <TextInput
                        style={contentStyles.textInput}
                        onChangeText={(text) => {
                            setValue('Name', text);
                            setYourName(text);
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
                    <Text>{yourName}</Text>
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
