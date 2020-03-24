import React,{useState} from 'react';
import {View, Text, StyleSheet,Picklist,TouchableOpacity,Image} from 'react-native';
import FormInput from '../../components/genericComponents/FormInput';


const CreateTaskScreen = ({pid,onSubmit}) => {
    const topics = ['Design', 'Code','Test','General'];
    const [name,setName]  = useState('');

    return (
        <View style={styles.container}> 
            <View style={styles.header}>
                <Text style={styles.headerStyle}>{pid} Project - New Task</Text>
                {/* <Picklist title='Topic' data={topics}  navigation=''/> */}
            </View>
            <FormInput title='Task Topic: ' value = {name}  onChange={setName}  viewStyle = {styles.meetDesign} />   
            <FormInput title='Task Name:' value = {name}  onChange={setName}  viewStyle = {styles.meetDesign} />   
            <TouchableOpacity onPress = {onSubmit}>
                <Image source={require('../../../assets/images/create.png')} style={styles.image}/>
            </TouchableOpacity> 
            <Image source={require('../../../assets/images/schedj.png')} style={styles.schedj}/> 
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'lightslategrey',        
        flex:1
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
    meetDesign: {
        marginVertical: 2,
        flexDirection: 'row',
        fontWeight:'bold',
        fontSize: 20,
    }, 
    image: {
        marginVertical: 30,
        height:100,
        width:150,
        borderRadius:10,
        alignSelf:'center'
    },
    schedj: {
        height:370,
        width:370,
        borderRadius:30,
        alignSelf:'center'
    },
});

export default CreateTaskScreen;