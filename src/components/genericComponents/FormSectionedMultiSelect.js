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
                    selectText="Add Tasks"
                    showDropDowns={true}
                    showCancelButton={true}
                    searchPlaceholderText=' Search Tasks'	
                    alwaysShowSelectText={false}
                    readOnlyHeadings={true}
                    onSelectedItemsChange={this.onSelectedItemsChange}
                    selectedItems={this.state.selectedItems}
                    showDropDowns = {true}
                    expandDropDowns = {true}
                    hideSearch = {false}
                    dropDownToggleIconUpComponent = {[]}
                    colors = {{selectToggleTextColor:'white', primary: '#455a64' ,itemBackground: '#a8cfd3', subItemBackground:'#ffffff', chipColor:'#ffffff'}}
                    styles = {{
                        selectToggleText:{
                            fontSize:16,
                            fontWeight:'bold',

                        },
                        selectToggle: { 
                            height: 35,
                            alignSelf:'stretch',
                            flex:1,
                        },
                        modalWrapper :{
                            width:'75%',
                            maxHeight: '80%',
                            alignSelf:'center',
                            marginTop: '40%',
                            backgroundColor:'transparent',
                        },
                        chipContainer : {
                            //width:'40%',
                            //alignItems:'center',
                            alignSelf:'stretch',
                            flex:1,
                            
                            
                        },
                        chipsText: { 
                        },
                        chipsWrapper: {
                            alignItems:'flex-end',
                            height: 40
                        },
                        parentChipContainer: {
                            alignItems:'flex-end'
                        }
                    }}
                />
            </View>
        );
    }
}
