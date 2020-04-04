import React from 'react';
import {StyleSheet, View, FlatList,ScrollView} from 'react-native';
import TopicsComp from './TopicsComp';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const TopicsList = ({topics, project, style, deleteTopic}) => {
    const topicsList = topics.filter((topic) =>  topic.pid == project.id);

    function Item({ item }) {
        return (
          <View style={styles.item}>
            <TopicsComp topic = {item} />
          </View>
        );
    }
    return (
        <View style = {style}>
            <ScrollView>
                <FlatList
                    data = {topicsList}
                    keyExtractor={(topic)=> topic.name}
                    renderItem= {({item}) => <Item item = {item}/>}  
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    item:{
        padding:3,
        marginVertical: 10
    },
    header:{
        flexDirection:'row', 
        flexWrap:'wrap',
        borderBottomWidth:5,
        borderBottomColor:'#2d6886',
        backgroundColor:'#8aa9b9',
    },
    text:{
        fontWeight:'bold',
        fontSize: 30,
        marginVertical: 10,
        marginHorizontal:34,
        alignSelf:'center',
        color:'#263238',
        flex:4
    },
    image:{
        marginVertical:10,
        height:60,
        width:60,
        borderRadius:5,
        marginRight: 15,
        alignSelf:'center',
        flex:1
    }
});

const mapStateToProps = state => {
    return { topics: state.topics };
};

export default connect(mapStateToProps,actions)(TopicsList);