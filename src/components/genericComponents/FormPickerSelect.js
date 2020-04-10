import React from 'react';
import {View,StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const FormPickerSelect = (items) => {
    
    return(
        <View>
            <RNPickerSelect 
                placeholder={{}}
                onValueChange={() => {}}
                items={items}
                style={{}}
            />
        </View>
    );   
};
const styles = StyleSheet.create({
 

});

export default FormPickerSelect;