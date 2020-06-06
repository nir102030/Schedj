import React, { useEffect } from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';
import TopicsList from '../../components/tasksComponents/TopicsList';
import CreateTopic from '../../components/tasksComponents/CreateTopic';
import { getAllTopicsFromDb } from '../../firebase/topicsAPI';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const TasksScreen = ({ navigation, topics, addTopic }) => {
	const project = navigation.getParam('project');

	useEffect(() => {
		getAllTopicsFromDb(project, topics, addTopic);
	}, []);

	return (
		<View style={styles.container}>
			<TopicsList project={project} style={styles.list} />
			<CreateTopic project={project} style={styles.TouchableOpacity} />
		</View>
	);
};

TasksScreen.navigationOptions = ({navigation}) => { 
    return{ headerRight:   
            <View style={styles.navigator}>
                <Text style={styles.headerStyle}> Tasks </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Projects')}>
                    <Image source={require('../../../assets/images/home.png')} style={styles.home}/>
                </TouchableOpacity>
            </View>
    };
};

const mapStateToProps = (state) => {
	return { topics: state.topics, tasks: state.tasks };
};

export default connect(mapStateToProps, actions)(TasksScreen);


const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		backgroundColor: '#e8f1f9',
	},
	list: {
		flex: 8,
		backgroundColor: '#e8f1f9',
	},
	TouchableOpacity: {
		backgroundColor: '#2b414b',
		flex: 2,
		flexDirection: 'row-reverse',
		borderBottomWidth: 1,
		borderBottomColor: '#d9e3f0',
		paddingTop: 5,
	},
	home: {
		height: 35,
        width: 35,
        marginRight:10
    },
    navigator:{
        flexDirection: 'row',
    },
    headerStyle: { 
        fontWeight:'bold',
        fontSize: 30,
        marginRight: 5,
        alignSelf:'center',
        color:'#263238',
        textAlign:'left'
    },  
	
});

