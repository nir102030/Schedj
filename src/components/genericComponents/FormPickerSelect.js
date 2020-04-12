import React from 'react';
import {View,StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const FormPickerSelect = ({items,label}) => {
    return(
        <View>
            <RNPickerSelect 
                placeholder={{
                    label: `       Select ${label}...`,
                    value: null, 
                    color: '#9EA0A4'
                }}
                onValueChange={() => {}}
                items={items}
                style={{placeholder: {color:'white'}}}
            />
        </View>
    );   
};
const styles = StyleSheet.create({
});

export default FormPickerSelect;