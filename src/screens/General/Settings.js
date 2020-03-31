import React,{useState} from 'react';
import {View, Text, StyleSheet,CheckBox,Image} from 'react-native';
import FormInput from '../../components/genericComponents/FormInput';
import RNPickerSelect from 'react-native-picker-select';


const Settings = ({pid}) => {
    const [checked,setChecked]  = useState(checked);
    const [edit,setEdit] = useState('');

    return (
        <View style={styles.container}> 
            <View style={styles.header}>
                    <Text style={styles.headerStyle}> {pid} Project Settings </Text>
                    <Image source={require('../../../assets/images/settings.png')} style={styles.imageHeader}/>
            </View>
            <Text style={styles.subHeader}> Edit Profile </Text>
                <FormInput title=' Edit Profile Name:' value={edit} onChange = {setEdit} viewStyle = {styles.Pname}/> 
            <View  style={styles.changePic}>
                <Image source={require('../../../assets/images/pp.png')} style={styles.imagePP}/>
                <Text style={styles.task}>Change Profile Picture:      </Text>
            </View>
            <Text style={styles.subHeader}> Notifications </Text>
            <View style={styles.Check}>
                <CheckBox title='Email' checked={setChecked} style={styles.CheckBox1}/>
                <Text style={styles.notification}>Email  </Text>
            </View>
            <View style={styles.Check}>
                <CheckBox title='Mobile' checked={setChecked} style={styles.CheckBox2}/>
                <Text style={styles.notification}>Mobile  </Text>
            </View>
            <View  style={styles.rankPic}>
            <Image source={require('../../../assets/images/rank.png')} style={styles.imageRank}/>
            <Text style={styles.rank}>Rank our app</Text>
            </View>
            <RNPickerSelect 
                            placeholder={{}}
                            onValueChange={() => {}}
                            items={[
                                { label: '1', value: '1' },
                                { label: '2', value: '2' },
                                { label: '3', value: '3' },
                                { label: '4', value: '4' },
                                { label: '5', value: '5' },
                            ]}
                            style={{ }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#607d8b',        
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
    editBox: {
        flexDirection: 'row',
        borderBottomWidth: 3,
        borderBottomColor:'#d9e3f0',  
        marginBottom:10 
    },
    changePic:{
        flexDirection: 'row',
        alignSelf:'flex-end'
    },
    subHeader: {
        marginVertical: 12,
        paddingBottom:10,
        marginHorizontal:10,
        fontWeight:'bold',
        fontSize: 22,
        color:'#152d48',
        borderBottomWidth: 3,
        borderBottomColor:'#d9e3f0',
    }, 
    task:{
        marginVertical:10,
        fontWeight:'bold',
        fontSize: 22,
        marginHorizontal:15,
        color:'black',
    },
    notification:{
        marginVertical:10,
        fontWeight:'bold',
        fontSize: 22,
        marginHorizontal:15,
        color:'black',
        alignSelf:'center',
    },
    Check:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    CheckBox1:{
        marginVertical:10,
        marginHorizontal:21,
        fontSize: 20,
        justifyContent: 'flex-start',
    },
    CheckBox2:{
        marginVertical:10,
        marginHorizontal:10,
        fontSize: 20,
        justifyContent: 'flex-start',
    },
    Pname: {
        flexDirection: 'row',   
        marginBottom:10,
        fontSize:16
    },
    imageHeader:{
        marginVertical:10,
        height:60,
        width:60,
        borderRadius:5,
        marginRight: 15,
        alignSelf:'center'
    },
    imagePP:{
        height:60,
        width:60
    },
    imageRank:{
        height:60,
        width:150
    },
    rank:{
        marginVertical:15,
        marginHorizontal:15,
        fontWeight:'bold',
        fontSize: 22,
        color:'#152d48',
        borderBottomWidth: 3,
        borderBottomColor:'#d9e3f0',
        paddingRight:70
    },
    rankPic:{
        paddingTop:150,
        flexDirection: 'row',
        alignSelf:'flex-end'
    },
});

export default Settings;