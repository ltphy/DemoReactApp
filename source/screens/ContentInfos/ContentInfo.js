import React, {useState} from 'react';
import {View, Text, TextInput, Picker} from 'react-native';

const ContentInfo = () => {
    const [selectedValue, setSelectedValue] = useState('Choose Value');
    const [robotName, setRobotName] = useState('');
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <View
                style={{
                    backgroundColor: 'powderblue',
                    padding: 20,
                    borderRadius: 5,
                    marginRight: 10,
                }}
            >
                <View>
                    <Text>Robot Name:</Text>
                    <Text>{robotName}</Text>
                </View>
                <Text>Date:</Text>
                <Text>Date:</Text>
            </View>
            <View>
                <View style={{marginBottom: 5}}>
                    <Text style={{fontWeight: 'bold'}}> Name</Text>
                    <TextInput
                        style={{borderRadius: 5, borderWidth: 1, borderStyle: 'solid'}}
                        onChangeText={(text) => {
                            setRobotName(text);
                        }}
                    />
                </View>
                <View style={{marginBottom: 5}}>
                    <Text> Name</Text>
                    <TextInput
                        style={{borderRadius: 5, borderWidth: 1, borderStyle: 'solid'}}
                    />
                </View>
                <Text> Options </Text>

                <Picker
                    selectedValue={selectedValue}
                    style={{height: 50, width: 150}}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="ChooseValue" value=""/>
                    <Picker.Item label="Java" value="java"/>
                    <Picker.Item label="JavaScript" value="js"/>
                </Picker>
            </View>
        </View>
    );
};
export default ContentInfo;
