import React, { Component } from 'react';
import { View } from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

export default class FormSectionedMultiSelect extends Component {
 
    state = {
        selectedItems : []
    };
    
    items = this.props.taskChoices;
    
    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
        this.props.addTasksToMeeting(selectedItems);
    };
    
    render() {
        return (
            <View>
                <SectionedMultiSelect
                    items={this.items}
                    uniqueKey="id"
                    subKey="children"
                    selectText="Choose some things..."
                    showDropDowns={true}
                    readOnlyHeadings={true}
                    onSelectedItemsChange={this.onSelectedItemsChange}
                    selectedItems={this.state.selectedItems}
                />
            </View>
        );
    }
}
