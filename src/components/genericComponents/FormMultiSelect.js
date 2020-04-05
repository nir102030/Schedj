import React, { Component } from 'react';
import { View } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
 
class FormMultiSelect extends Component {
 
    state = {
        selectedItems : []
    };
    
    items = this.props.taskChoice
    
    onSelectedItemsChange = selectedItems => {
        console.log(selectedItems);
        this.setState({ selectedItems });
        this.props.addTasksToMeeting(selectedItems);
        //this.props.addTaskToMeeting(selectedItems);
    };
    
    render() {
        const { selectedItems } = this.state;
        return (
        <View style={{ flex: 1 }}>
            <MultiSelect
                hideTags
                items={this.items}
                uniqueKey="id"
                ref={(component) => { this.multiSelect = component }}
                onSelectedItemsChange={this.onSelectedItemsChange}
                selectedItems={selectedItems}
                selectText="Add Tasks"
                searchInputPlaceholderText="Search tasks..."
                onChangeInput={ (text)=> console.log(text)}
                //altFontFamily="ProximaNova-Light"
                tagRemoveIconColor="#CCC"
                tagBorderColor="#CCC"
                tagTextColor="#CCC"
                selectedItemTextColor="#CCC"
                selectedItemIconColor="#CCC"
                itemTextColor="#000"
                displayKey="name"
                searchInputStyle={{ color: '#CCC' }}
                submitButtonColor="#CCC"
                submitButtonText="Submit"
            />
            <View>
                {
                    this.multiSelect
                    ?
                    this.multiSelect.getSelectedItemsExt(selectedItems)
                    :
                    null
                }
            </View>
        </View>
        );
    }
}

export default FormMultiSelect;
