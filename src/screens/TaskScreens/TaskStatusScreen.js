import React,{useState} from 'react';
import {View, Text, StyleSheet,CheckBox,ScrollView,TouchableOpacity,Image} from 'react-native';
import * as Progress from 'react-native-progress';
import {withNavigation} from 'react-navigation';


const TaskStatusScreen = ({pid,navigation}) => {
    const [checked,setChecked]  = useState(checked);

    return (
        <View style={styles.container}> 
            <View style={styles.header}>
                    <Text style={styles.headerStyle}> {pid} Project - Tasks Status </Text>
            </View>
            <ScrollView> 
                <Text style={styles.subHeader}> Design </Text>
                <View style={styles.progCheckRow}>
                    <CheckBox title='ERD' checked={setChecked} style={styles.CheckBox}/>
                    <Progress.Bar progress={0.3} width={200} height={30} animated={true} color={'#99BAC9'} marginVertical={10}/>
                    <Text style={styles.task}> ERD  </Text>
                </View>
                <View style={styles.progCheckRow}>
                    <CheckBox title='Demends' checked={setChecked} style={styles.CheckBox}/>
                    <Progress.Bar progress={0.8} width={200} height={30} animated={true} color={'#99BAC9'} marginVertical={10}/>
                    <Text style={styles.task}> Demends  </Text>
                </View>
                <Text style={styles.subHeader}> Code </Text>
                <View style={styles.progCheckRow}>
                    <CheckBox title='Build DB' checked={setChecked} style={styles.CheckBox}/>
                    <Progress.Bar progress={0.5} width={200} height={30} animated={true} color={'#99BAC9'} marginVertical={10}/>
                    <Text style={styles.task}> Build DB  </Text>
                </View>
                <Text style={styles.subHeader}> Test </Text>
                    <View style={styles.progCheckRow}>
                    <CheckBox title='Version 1' checked={setChecked} style={styles.CheckBox}/>
                    <Progress.Bar progress={0.4} width={200} height={30} animated={true} color={'#99BAC9'} marginVertical={10}/>
                <Text style={styles.task}> Version 1  </Text>
                </View>
                <Text style={styles.subHeader}> General </Text>
                    <View style={styles.progCheckRow}>
                    <CheckBox title='CoronaVirus' checked={setChecked} style={styles.CheckBox}/>
                    <Progress.Bar progress={0.7} width={200} height={30} animated={true} color={'#99BAC9'} marginVertical={10}/>
                <Text style={styles.task}> CoronaVirus  </Text>
                </View>
                <View style={{marginVertical:15}}>
                    <TouchableOpacity style = {styles.TouchableOpacity}  onPress = {()=>navigation.navigate('CreateT')}>
                            <Image source={require('../../../assets/images/addTopic.png')} style={styles.image}/>
                            <Text style={styles.text}>  Add a New Topic</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.TouchableOpacity}  onPress = {()=>navigation.navigate('CreateT')}>
                            <Image source={require('../../../assets/images/add.png')} style={styles.image}/>
                            <Text style={styles.text}>  Add a New Task</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView> 

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#607d8b',        
        flex:1
    },
    TouchableOpacity: {
        backgroundColor:'#2b414b',
        flex:1,
        flexDirection:'row-reverse',
        borderBottomWidth:1,
        borderBottomColor:'#d9e3f0',
        paddingTop: 5,
    },
    image: {
        height:37,
        width:37,
        marginRight: 15,
        alignSelf:'center'
    },
    text: {
        fontSize:20,
        color:'oldlace',
        alignSelf:'center',
        fontWeight:'bold',
        marginVertical:12,
    },
    header: {
        flexDirection: 'row',
        backgroundColor:'#8aa9b9',
        justifyContent: 'flex-end',
        borderBottomWidth:5,
        borderBottomColor:'#2d6886'
    },
    headerStyle: {        
        fontWeight:'bold',
        fontSize: 30,
        marginVertical: 10,
        marginHorizontal:34,
        alignSelf:'center',
        color:'#263238',
        textAlign:'left'
    },
    subHeader: {
        marginVertical: 12,
        paddingBottom:10,
        marginHorizontal:10,
        fontWeight:'bold',
        fontSize: 22,
        color:'black',
        borderBottomWidth: 3,
        borderBottomColor:'#d9e3f0',
        textAlign:'right'
    }, 
    progCheckRow:{
        flexDirection: 'row',
        alignSelf:'stretch',
    },
    CheckBox:{
        marginVertical:10,
        marginHorizontal:10,
        fontSize: 20
    },
    task:{
        marginVertical:10,
        fontWeight:'bold',
        fontSize: 20,
        color:'#263238',
    }
});

export default withNavigation(TaskStatusScreen);