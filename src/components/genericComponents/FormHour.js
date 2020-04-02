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
    backgroundColor: "#fff",
    paddingTop: 100
  },
  text: {
    fontSize: 20,
    marginTop: 10
  },
  button: {
    backgroundColor: "#4EB151",
    paddingVertical: 11,
    paddingHorizontal: 17,
    borderRadius: 3,
    marginVertical: 50
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600"
  }
});
 
export default FormHour