import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import TimePicker from "react-native-24h-timepicker";
 

const FormHour = () => {
const onCancel = () => {
    TimePicker.close();
};
// const state = () => {
//     time: ""
//   };
// }
const onConfirm = (hour, minute) => {
    const [State,setState] = useState({time: `${hour}:${minute}`});
    TimePicker.close();
}
 
return (
        <View style={styles.container}>
            <Text style={styles.text}>REACT NATIVE</Text>
            <Text style={styles.text}>24 HOURS FORMAT TIMEPICKER</Text>
            <TouchableOpacity onPress={() => TimePicker.open()} style={styles.button}>
                <Text style={styles.buttonText}>TIMEPICKER</Text>
            </TouchableOpacity>
            <Text style={styles.text}>{State}</Text>
            <TimePicker
                ref={ref => {
                    TimePicker = ref;
                }}
                onCancel={() => onCancel()}
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