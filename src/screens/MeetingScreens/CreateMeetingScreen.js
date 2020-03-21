import React,{useState } from 'react';
import {View, Text, StyleSheet,TouchableOpacity,Image,TextInput,ScrollView} from 'react-native';
import DialogInput from 'react-native-dialog-input';
import DatePicker from 'react-native-datepicker'
//import TimePicker from "react-native-24h-timepicker";
import ProjectDetail from './ProjectDetail';




const CreateMeetingScreen = ({id, pid}) => {

    const [date, setDate] = useState(new Date());
    // const [time, setTime] = useState("");

    // const onCancel = () => {TimePicker.close()};

    // const onConfirm = (hour, minute) => {
    //     setTime({ time: `${hour}:${minute}`});
    //     TimePicker.close();
    // };


        return (
            <View style={styles.container}> 
    
                <View style={styles.header}>
                    <Text style={styles.text}>-     Meeting {id} </Text>
                    <Text style={styles.text}>Project {pid}</Text>
                </View>

                <ScrollView> 

                    
                    {/* <TouchableOpacity onPress={() => TimePicker.open()} style={styles.button}>
                        <Text style={styles.buttonText}>TIMEPICKER</Text>
                    </TouchableOpacity>
                    <Text style={styles.texta}>{time}</Text>

                    <TimePicker 
                    ref = {(ref) => setTime(ref)}
                    onCancel = {() => onCancel()}
                    onConfirm = {(hour, minute) => onConfirm(hour, minute)}
                    /> */}

                <Text style={styles.fill}>Please fill the required fields </Text>

                <View style={styles.viewStyle}>
                    
                    <DatePicker
                        style={{width: 150},{flex: 1}}
                        date={date}                    
                        mode="date"
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        minDate="01-01-2020"
                        maxDate="01-01-2200"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                        dateTouchBody: {
                            marginTop: 12,
                        },

                        dateIcon: {
                            position: 'absolute',
                            left: 2,
                            top: 5,
                            marginLeft: 10
                            
                        },
                        dateInput: {
                            marginLeft: 50,
                            marginHorizontal:30
                        }
                        // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => {setDate(date)}}
                    />    
                    <Text style={styles.input}>Date:</Text> 
                </View>
            

                <View style={styles.viewStyle}>
                    <TextInput  style={styles.realInput}
                    placeholder="##:##"/>    
                    <Text style={styles.input}> Till  </Text> 
                    <TextInput  style={styles.realInput}
                    placeholder="##:##"/>            
                    <Text style={styles.input}>Hours: </Text> 
                </View>

                <View style={styles.viewStyle}>
                    <TextInput  style={styles.realInput}
                    placeholder="Enter Place"/>            
                    <Text style={styles.input}>Place of meeting: </Text> 
                </View>

                <View style={styles.viewStyle}>
                    <TextInput  style={styles.realInput}
                    placeholder= "Find your friends"/>            
                    <Text style={styles.input}>Participants: </Text> 
                </View>
            
                <Text style={styles.notes}>Notes: </Text> 

                <View>
                    <TextInput  style={styles.viewStyle1}
                    placeholder= ".1."/> 
                </View>

                <View>
                    <TextInput  style={styles.viewStyle1}
                    placeholder= ".2."/> 
                </View>

                <View>
                    <TextInput  style={styles.viewStyle1}
                    placeholder= ".3."/> 
                </View>

                <Image style={styles.image} source={require('../../../assets/images/create.png')}/>

                </ScrollView>

            </View>

             );
    };

    const styles = StyleSheet.create({
        container: {
            backgroundColor:'lightslategrey',        
            flex:1
        },
        fill: {
            backgroundColor:'red',        
            flex:1
        },
        header: {
            flexDirection: 'row',
            backgroundColor:'#455a64',
            //alignSelf:'flex-end'
            
        },
        image: {
            marginVertical: 100

        },
        input: {
            marginVertical: 20,
            marginHorizontal:10,
            fontWeight:'bold',
            fontSize: 22,
            color:'black',
            flex:1
        },  
        realInput: {
            backgroundColor: '#455a64',
            marginVertical: 20,
            marginHorizontal:10,
            fontWeight:'bold',
            fontSize: 20,
            color:'black',
            textAlign: 'center',
            flex:1
        },
        notes: {
            marginVertical: 5,
            marginHorizontal:10,
            fontWeight:'bold',
            fontSize: 22,
            color:'black',
            alignSelf:'flex-end',

        },  
        note: {
            marginVertical: 10,
            marginHorizontal:10,
            fontSize: 20,
            color:'black',
            alignSelf:'flex-end',
            flex:1

        },  
        viewStyle: {
            flexDirection: 'row',
            borderBottomWidth: 3,
            borderBottomColor:'#d9e3f0',
            
        }, 
        viewStyle1: {
            marginVertical: 2,
            flexDirection: 'row',
            marginHorizontal:20,
            fontWeight:'bold',
            alignSelf:'flex-end',
            fontSize: 20
        }, 
        text: {
            marginVertical: 20,
            marginHorizontal: 10,
            height: 30,
            fontWeight:'bold',
            fontSize: 22,
            color:'oldlace',
            
        }, 
        Date:{
            marginHorizontal: 5,
            height: 60,
            fontWeight:'bold',
            fontSize: 22,
            color:'black'
        },
        texta: {
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

export default CreateMeetingScreen;