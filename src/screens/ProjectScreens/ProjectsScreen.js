import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native'
import ProjectsList from '../../components/projectsComponents/ProjectsList'
import { Header } from 'react-native/Libraries/NewAppScreen';


const ProjectsScreen = ({navigation}) => {    
    return (
        <View style={styles.container}>
            <ProjectsList style={styles.list}/>
            <TouchableOpacity style = {styles.TouchableOpacityAdd}  onPress = {()=>navigation.navigate('CreateP')}>
                <Image source={require('../../../assets/images/add.png')} style={styles.image}/>
                <Text style={styles.text}>Add a New Project</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.TouchableOpacityAbout}  onPress = {()=>navigation.navigate('AboutUs')}>
                <Image source={require('../../../assets/images/AboutUsIcon.png')} style={styles.image}/>
                <Text style={styles.text}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.TouchableOpacitySettings}  onPress = {()=>navigation.navigate('Settings')}>
                <Image source={require('../../../assets/images/settings.png')} style={styles.image}/>
                <Text style={styles.text}>Settings</Text>
            </TouchableOpacity>
        </View>
    );
};

ProjectsScreen.navigationOptions = () => {
    return{
        HeaderRight:  
        <TouchableOpacity>
            <Text> d </Text>
        </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    container: {
        height:'100%',
        width:'100%',
        backgroundColor: '#607d8b'
    },
    options:{
        flexDirection:'row',
    },
    list: {
        flex:9  
    },
    TouchableOpacityAdd: {
        backgroundColor:'#2b414b',
        flex:1,
        flexDirection:'row-reverse'
    },
    TouchableOpacityAbout: {
        backgroundColor:'#375360',
        flex:1,
        flexDirection:'row-reverse'
    },
    TouchableOpacitySettings: {
        backgroundColor:'#375360',
        flex:1,
        flexDirection:'row-reverse',
        paddingLeft:3
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
