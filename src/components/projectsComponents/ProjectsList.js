import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ProjectComp from './ProjectComp';
import { connect } from 'react-redux';

const ProjectList = ({projects, style }) => {

    function Item({ item }) {
        return (
            <View style={styles.item}>
                <ProjectComp project={item}/>
            </View>
        );
    }
    return (
        <View style={style}>
            <FlatList
                data = {projects}
                keyExtractor={(project) => `list-project-${project.id}`}
                renderItem= {({item}) => <Item item={item}/>}                    
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

const mapStateToProps = state => {
    return { projects: state.projects };
};

export default connect(mapStateToProps)(ProjectList);