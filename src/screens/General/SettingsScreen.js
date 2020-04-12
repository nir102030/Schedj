import React,{useState} from 'react';
import {View, Text, StyleSheet,CheckBox,Image} from 'react-native';
import FormInput from '../../components/genericComponents/FormInput';
import FormPickerSelect from '../../components/genericComponents/FormPickerSelect';
import RNPickerSelect from 'react-native-picker-select';

const SettingsScreen = ({pid}) => {
    const [checked,setChecked]  = useState(checked);
    const [edit,setEdit] = useState('');
    const placehol = {
        label: '        Select Reminder...',
        value: null,
        color: '#9EA0A4',
      };

    return (
        <View style={styles.container}> 
            <Text style={styles.subHeader}> Edit Profile </Text>
                <FormInput title=' Edit Profile Name' value={edit} onChange = {setEdit} viewStyle = {styles.Pname}/> 
            <View  style={styles.changePic}>
                <Image source={require('../../../assets/images/pp.png')} style={styles.imagePP}/>
                <Text style={styles.task}>Change Profile Picture     </Text>
            </View>
            <Text style={styles.subHeader}> Notifications </Text>
            <View style={styles.Check}>
                <CheckBox title='Email' checked={setChecked} style={styles.CheckBox1} value={true}/>
                <Text style={styles.notification}>Email  </Text>
            </View>
            <View style={styles.Check}>
                <CheckBox title='Mobile' checked={setChecked} style={styles.CheckBox2} value={true}/>
                <Text style={styles.notification}>Mobile  </Text>
            </View>
            <Text style={styles.subHeader}> Reminder </Text>
            <View  style={styles.Check}>
            </View>
            <RNPickerSelect 
                placeholder={placehol}
                onValueChange={() => {}}
                items={[
                    { label:'       48 Hours', value:'48 Hours',color:'#192C4D'},
                    { label:'       24 Hours', value:'24 Hours',color:'#192C4D' },
                    { label:'       12 Hours', value:'12 Hours',color:'#192C4D' },
                    { label:'       3 Hours', value:'3 Hours',color:'#192C4D' },
                    { label:'       1 Hour', value:'1 Hours',color:'#192C4D' },
                    { label:'       No Reminder', value:'No Reminder',color:'red' },
                ]}
                style={{placeholder:{color:'white'}}}
            />
            <Text style={styles.subHeader}> Rank our app </Text>
            {/* <FormPickerSelect /> */}
        </View>
    );
};

SettingsScreen.navigationOptions = () => { 
    return{ headerRight:   
            <View>
                <Text style={styles.headerStyle}> Settings </Text>
            </View>
    };
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#607d8b',        
        flex:1
    },
    changePic:{
        flexDirection: 'row',
        alignSelf:'flex-end'
    },
    subHeader: {
        marginVertical:10,
        paddingBottom:10,
        paddingLeft:10,
        fontWeight:'bold',
        fontSize: 22,
        color:'#152d48',
        borderBottomWidth: 3,
        borderBottomColor:'#d9e3f0'
    }, 
    task:{
        marginVertical:10,
        fontSize: 20,
        marginHorizontal:15,
        color:'white',
    },
    notification:{
        marginVertical:10,
        fontSize: 20,
        marginHorizontal:15,
        color:'white',
        alignSelf:'center'
    },
    Check:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    CheckBox1:{
        backgroundColor:'white',
        marginVertical:10,
        marginHorizontal:21,
        fontSize: 20,
        justifyContent: 'flex-start',
    },
    CheckBox2:{
        backgroundColor:'white',
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
    imagePP:{
        height:60,
        width:60
    },
    imageS:{
        height:60,
        width:150,
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

export default SettingsScreen;