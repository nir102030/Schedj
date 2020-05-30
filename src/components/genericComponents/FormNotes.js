import React from 'react'
import {View, StyleSheet} from 'react-native'
import FormInput from '../genericComponents/FormInput'

const FormNotes = ({notes, setNotes}) => {

    const handleNoteList = (note, index) => {
        const newNotes = [...notes];
        newNotes[index] = note;
        setNotes(newNotes);
    }

    return (
        <View>
            <FormInput 
                value = {notes[0]} 
                onChange={(note) => handleNoteList(note,0)} 
                viewStyle = {styles.notes}
            />
            <FormInput 
                value = {notes[1]} 
                onChange={(note) => handleNoteList(note,1)} 
                viewStyle = {styles.notes}
            />
            <FormInput 
                value = {notes[2]} 
                onChange={(note) => handleNoteList(note,2)} 
                viewStyle = {styles.notes}
            />
        </View>
)};

const styles = StyleSheet.create({
    notes: {
        flexDirection: 'row',
    }, 
})


export default FormNotes;