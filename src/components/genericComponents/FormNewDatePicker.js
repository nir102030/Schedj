import React, { useState } from "react";
import { StyleSheet, View,Image, TouchableOpacity, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const FormNewDatePicker = ({date,setDate}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };

  return (
    <View>
      <TouchableOpacity style={styles.TouchableOpacity} onPress={showDatePicker}>
		<Image source={require('../../../assets/images/Cal.png')} style={styles.image} />
    <Text style={styles.dateTime}>{date.toString()}</Text>
	  </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={(date)=>handleConfirm(date)}
        onCancel={hideDatePicker}
      />
    </View>
  );
};
const styles = StyleSheet.create({
	TouchableOpacity: {
    backgroundColor: '#e8f1f9',
    flexDirection: 'row',
    },
    image:{
        height:40,
        width:40,
        marginVertical:10,
        marginHorizontal:10
    },
    dateTime:{
      marginVertical:23,
      marginHorizontal:30

    }
})

export default FormNewDatePicker;