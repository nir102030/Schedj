import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
 


const FormHour = ({TimePicker}) => {
    const [time,setTime] = useState('00:00');

    const onConfirm = (hour, minute) => {
        setTime(`${hour}:${minute}`);
        TimePicker.close();
}
    
    return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => TimePicker.open()} style={styles.button}>
                    <Text style={styles.buttonText}>{time}</Text>
                </TouchableOpacity>
                <TimePicker
                    ref={ref => {
                        TimePicker = ref;
                    }}
                    onCancel={() => TimePicker.close()}
                    onConfirm={(hour, minute) => onConfirm(hour, minute)}
                />
            </View>
            );
}

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#607d8b",
    paddingLeft:40
  },
  text: {
    fontSize: 20,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#b1c2ca",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    fontWeight:'bold',
  }
});
 
export default FormHour