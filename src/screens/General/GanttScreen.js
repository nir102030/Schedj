import React, { Component } from 'react'
import GanttChart from 'react-native-gantt-chart'
import { View,ScrollView,StyleSheet,Text,Image } from 'react-native'

const GanttScreen = () => {
    const tasks = [
        { _id: "1", name: "Task 1", "start": new Date(2020, 0, 1), "end": new Date(2020, 0, 5), progress: 0.7 },
        { _id: "2", name: "Task 2", "start": new Date(2020, 0, 1), "end": new Date(2020, 0, 5), progress: 1 },
        { _id: "3", name: "Task 3", "start": new Date(2020, 0, 1), "end": new Date(2020, 0, 5), progress: 0.3 }
        ];
    

    return <View style = {styles.container}>
                <View style={styles.header}>
                <Text style={styles.gantt}>Gantt Chart Project </Text>
                <Image source={require('../../../assets/images/gantt.png')} style={styles.image}/>
                </View>

                <View>
                    <ScrollView horizontal={true}> 
                        <GanttChart 
                            data={tasks}
                            numberOfTicks={5}
                            onPressTask={task => alert(task.name)}
                            gridMin={new Date(2020, 0, 1).getTime()}
                            gridMax={new Date(3000, 0, 20).getTime()}
                            colors={{
                                barColorPrimary: '#0c2461',
                                barColorSecondary: '#4a69bd',
                                textColor: '#fff',
                                backgroundColor: '#607d8b'
                            }}
                        />
                    </ScrollView>
                </View>
            </View>
};

   
const styles = StyleSheet.create({
        container:{
            backgroundColor:'#607d8b',
            height:'100%'
        },
        gantt: {
            fontWeight:'bold',
            fontSize: 30,
            marginVertical: 10,
            alignSelf:'center',
            color:'#263238',
            textAlign:'left',
        },
        header: {
            flexDirection: 'row',
            backgroundColor:'#8aa9b9',
            justifyContent: 'flex-end',
            borderBottomWidth:5,
            borderBottomColor:'#2d6886'
        },
        image:{
            height:40,
            width:40,
            alignSelf:'center',
            marginHorizontal:10
        }
});


export default GanttScreen