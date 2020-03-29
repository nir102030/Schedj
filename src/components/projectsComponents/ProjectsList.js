import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ProjectComp from './ProjectComp';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const ProjectList = ({projects, style, deleteProject }) => {

    function Item({ item }) {
        return (
            <View style={styles.item}>
                <ProjectComp project={item} deleteProject={(project) => deleteProject({project})}/>
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

export default connect(mapStateToProps,actions)(ProjectList);