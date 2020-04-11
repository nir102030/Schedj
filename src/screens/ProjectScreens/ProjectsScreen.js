import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native'
import ProjectsList from '../../components/projectsComponents/ProjectsList'


const ProjectsScreen = ({navigation}) => {    
    return (
        
        <View style={styles.container}>
            <ProjectsList style={styles.list}/>
            <View style={styles.straight}>
                <TouchableOpacity style={styles.TouchableOpacityComing}  onPress = {()=>navigation.navigate('ComeSoon')}>
                        <Image source={require('../../../assets/images/comingsoon.png')} style={styles.image}/>
                    <Text style={styles.text}>Coming Soon</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.TouchableOpacityAbout}  onPress = {()=>navigation.navigate('AboutUs')}>
                    <Image source={require('../../../assets/images/AboutUsIcon.png')} style={styles.image}/>
                    <Text style={styles.text}>About Us</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.TouchableOpacitySettings}  onPress = {()=>navigation.navigate('Settings')}>
                    <Image source={require('../../../assets/images/settings.png')} style={styles.image}/>
                    <Text style={styles.text}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.TouchableOpacityAdd}  onPress = {()=>navigation.navigate('CreateP')}>
                    <Image source={require('../../../assets/images/add.png')} style={styles.image}/>
                    <Text style={styles.text}>Add Project</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    
};
ProjectsScreen.navigationOptions = () => {
    return {
        headerRight:
            <View style={styles.header}>
                <Text style={styles.headerStyle}>Projects</Text>
            </View>
    }
};

const styles = StyleSheet.create({
    container: {
        height:'100%',
        width:'100%',
        backgroundColor: '#607d8b',
    },
    straight:{
        flexDirection:'row',
    },
    options:{
        flexDirection:'row',
    },
    list: {
        flex:9  
    },
    TouchableOpacityAdd: {
        backgroundColor:'#cfd8dc',
        flex:2.5,
        flexDirection:'column',
        borderBottomWidth:0.6,
        borderBottomColor:'white'
    },
    TouchableOpacityAbout: {
        backgroundColor:'#cfd8dc',
        flex:2.5,
        flexDirection:'column',
        borderBottomWidth:0.6,
        borderBottomColor:'white'
    },
    TouchableOpacitySettings: {
        backgroundColor:'#90a4ae',
        flex:2.5,
        flexDirection:'column',
        borderBottomWidth:0.6,
        borderBottomColor:'white'
    },
    TouchableOpacityComing: {
        backgroundColor:'#90a4ae',
        flex:2.5,
        flexDirection:'column',
        borderBottomWidth:0.6,
        borderBottomColor:'white'
    },
    image: {
        height:37,
        width:37,
        alignSelf:'center'
    },
    image2: {
        height:40,
        width:40,
        marginBottom:10
    },
    text: {
        fontSize:14,
        color:'black',
        fontWeight:'bold',
        alignSelf:'center',
        //marginHorizontal:10,
    },
    header: {
        flexDirection: 'row',
        //backgroundColor:'#8aa9b9',
        justifyContent: 'flex-end',
        // borderBottomWidth:5,
        // borderBottomColor:'#2d6886'
    },
    headerStyle: {        
        fontWeight:'bold',
        fontSize: 30,
        //marginVertical: 10,
        //marginHorizontal:34,
        marginRight: 15,
        alignSelf:'center',
        color:'#263238',
        textAlign:'left'
    },
});

export default ProjectsScreen;
