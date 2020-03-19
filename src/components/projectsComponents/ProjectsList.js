import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import {withNavigation} from 'react-navigation';
import ProjectComp from './ProjectComp';

const ProjectList = ({ style }) => {
    //TODO: get the projects list from the reducers/index
    const projects = ['Final Project', 'KM','CRM','BI'];

    function Item({ pid }) {
        return (
            <View style={styles.item}>
                <ProjectComp pid={pid}/>
            </View>
        );
    }
    return (
        <View style={style}>
            <FlatList
                data = {projects}
                keyExtractor={(project)=> project}
                renderItem= {({item}) => <Item pid={item}/>}                    
            />
        </View>
    );
};

const styles = StyleSheet.create({
    item:{
        padding:3,
        marginVertical: 10
    }
});

export default withNavigation(ProjectList);