import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native'
import ProjectsList from '../../components/projectsComponents/ProjectsList'



const ProjectsScreen = ({navigation,project}) => {    
    return (
        <View style={styles.container}>
            <ProjectsList style={styles.list}/>
            <TouchableOpacity style = {styles.TouchableOpacity}  onPress = {()=>navigation.navigate('CreateP')}>
                <Image source={require('../../../assets/images/add.png')} style={styles.image}/>
                <Text style={styles.text}>Add a New Project</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height:'100%',
        width:'100%',
        backgroundColor: 'lightslategrey'
    },
    options:{
        flexDirection:'row',
    },
    list: {
        flex:9  
    },
    TouchableOpacity: {
        backgroundColor:'#2b414b',
        flex:1,
        flexDirection:'row-reverse'
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
        marginHorizontal:10
    }
});

export default ProjectsScreen;
