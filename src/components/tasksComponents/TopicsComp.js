import React,{useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image,TextInput} from 'react-native';
import {withNavigation} from 'react-navigation';
import TaskList from './TaskList';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const TopicsComp = ({navigation, topic,editTopic}) => {
    const [newTopic,setNewTopic] = useState(topic);

    const setExistTopic = (name)=>{
        setNewTopic({...newTopic, 'name':name});
        editTopic(newTopic)
    }

    return (
        <View style={styles.container}>
            <View style = {styles.topic}>
                <TextInput style={styles.subHeader} 
                    placeholder={newTopic.name}  
                    value={newTopic.name}  
                    onChangeText={(name) => setExistTopic(name)}
                /> 
                <TouchableOpacity style = {styles.TouchableOpacity}  onPress = {()=>navigation.navigate('CreateT', {topic})}>
                    <Image source={require('../../../assets/images/add.png')} style={styles.image}/>
                </TouchableOpacity>
            </View>
            <TaskList topic = {topic} style = {styles.list}/>
        </View>    
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#607d8b',
        flex:1,
    },
    list: {
        flex:9,
        backgroundColor:'#607d8b'
    },
    topic: {
        flexDirection:'row-reverse',
        borderBottomWidth: 3,
        borderBottomColor:'#d9e3f0'
    },
    subHeader: {
        fontSize: 22,
        color:'#152d48',
        flex:4,
        marginVertical:10,
        marginHorizontal:5,
        fontWeight:'bold',
    },
    TouchableOpacity: {
        flex:1,
        flexDirection:'row-reverse',
        marginLeft:150
    },
    image: {
        height:37,
        width:37,
        alignSelf:'center',
        marginHorizontal:5
    },
    
});

export default connect(null,actions)(withNavigation(TopicsComp));
