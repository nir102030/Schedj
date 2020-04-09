import React from 'react';
import {View,StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const FormPickerSelect = (label1,label2,label3,label4,label5,label6,value1,value2,value3,value4,value5,value6) => {
    
    return(
        <View>
            <RNPickerSelect 
                placeholder={{}}
                onValueChange={() => {}}
                items={[
                { label: label1, value: value1 ,color:'#192C4D'},
                // { label: label2, value: value2 ,color:'#192C4D'},
                // { label: label3, value: value3 ,color:'#192C4D'},
                // { label: label4, value: value4 ,color:'#192C4D'},
                // { label: label5, value: value5 ,color:'#192C4D'},
                // { label: label6, value: value6 ,color:'#192C4D'},
                ]}
                style={{}}
            />
        </View>
    );   
};
const styles = StyleSheet.create({
 

});

export default FormPickerSelect;