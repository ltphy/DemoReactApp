import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    TouchableOpacity,
    ScrollView,
    Modal,
    Alert,
    TouchableHighlight
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {useForm} from "react-hook-form";
import {contentStyles} from "./ContentInfo.css";
import {DataString, manga, Sex} from "./constants/defaultValues";
import RNPickerSelect, {Item} from 'react-native-picker-select';
import {CustomPickerSelect} from "../../components/CustomPickerSelect";
import {ModalContext} from "../../components/ModalContext/ModalContext";

const ContentInfo = () => {
    const [sexValue, setSexValue] = useState<string | null>('');
    const [mangaValue, setMangaValue] = useState<string | null>("");

    const [yourName, setYourName] = useState<string | null>("");
    const {register, setValue, handleSubmit} = useForm();
    const [mangaPickers, setMangaList] = useState<Item[] | undefined>();
    const [mangaError, setMangaError] = useState<boolean>(false);
    const [sexError, setSexError] = useState<boolean>(false);
    const [sexPickers, setSexPickersList] = useState<Item[] | undefined>();
    const [dataString, setDataString] = useState<string[]>([]);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    useEffect(() => {
        const mangaPickers = manga.map((valuePicker) => {
            return {label: valuePicker, value: valuePicker};
        });
        setMangaList(mangaPickers);

        const sexPickers = Sex.map((valuePicker) => {
            return {label: valuePicker, value: valuePicker};
        });
        setSexPickersList(sexPickers);
        const displayInfo = DataString.split("\\n").map((value) => {
            return value;
        });
        setDataString(displayInfo);

    }, []);


    useEffect(() => {
        register('Name');
        register('SecondName');
    }, [register]);

    const renderManga = () => {
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
        //set error when value "" and mangaError is false
        let error = false;
        if (!mangaValue) {
            setMangaError(true);
            error = true;
        } else if (mangaValue && mangaError) {
            setMangaError(false);
        }
        if (!sexValue) {
            setSexError(true);
            error = true;
        } else if (sexValue && sexError) {
            setSexError(false);
        }
        if (error) {
            setModalVisible(true);
        }

    };
    const renderApplyButton = () => {
        return (
            <TouchableHighlight
                style={contentStyles.buttonApply}
                onPress={handleSubmit(onApply)}
            >
                <Text style={contentStyles.applyText}>Apply</Text>
            </TouchableHighlight>);
    };

    const renderInformationInput = () => {
        return (
            <View style={contentStyles.informationInput}>
                {renderManga()}

                {renderSex()}
                <TextInput
                    style={contentStyles.textInput}
                    onChangeText={(text) => {
                        setValue('Name', text);
                        setYourName(text);
                    }}
                    placeholder={"params"}
                />
                {renderApplyButton()}
            </View>
        );
    };
    const renderContainInfo = () => {
        return (
            <View style={contentStyles.infoContainer}>
                <Text style={contentStyles.detailTitle}>Details</Text>

                <ScrollView style={contentStyles.infoScrollView}>
                    <View>
                        {
                            dataString.map((value, index) => {
                                return (<Text style={contentStyles.infoText} key={index.toString()}> {value}</Text>);
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        );
    };
    return (
        <View
            style={contentStyles.wholeContainer}
        >
            <ModalContext content={"Please check your input!"}
                          modalVisible={modalVisible}
                          setClose={() => {
                              setModalVisible(false)
                          }}/>
            {renderContainInfo()}
            {renderInformationInput()}
        </View>
    );
};
export default ContentInfo;
