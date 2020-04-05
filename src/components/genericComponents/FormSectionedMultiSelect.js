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
                    selectText="Add tasks"
                    showDropDowns={true}
                    readOnlyHeadings={true}
                    onSelectedItemsChange={this.onSelectedItemsChange}
                    selectedItems={this.state.selectedItems}
                    showDropDowns = {true}
                    expandDropDowns = {true}
                    hideSearch = {true}
                    dropDownToggleIconUpComponent = {[]}
                    colors = {{primary: '#6495ed', itemBackground: '#f0f8ff', subItemBackground:'#ffffff', chipColor:'#ffffff'}}
                    styles = {{
                        modalWrapper :{
                            width:'80%',
                            maxHeight: '80%',
                            alignSelf:'center',
                            marginTop: '50%',
                            backgroundColor:'transparent'
                        },
                        chipContainer : {

                        },
                        chipsWrapper: {
                            alignItems:'center'
                        },
                        parentChipContainer: {
                            alignItems:'center'
                        }
                    }}
                />
            </View>
        );
    }
}
