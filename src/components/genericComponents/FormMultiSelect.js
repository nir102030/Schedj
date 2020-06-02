import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';
import MultiSelect from 'react-native-multiple-select';

class FormMultiSelect extends Component {
	state = {
		selectedItems: this.props.selectedItems,
	};

	items = this.props.list;

	onSelectedItemsChange = (selectedItems) => {
		this.setState({ selectedItems });
		this.props.addItemsToList(selectedItems);
		//this.props.addTaskToMeeting(selectedItems);
	};

	render() {
		const { selectedItems } = this.state;
		return (
			<View style={styles.container}>
				<MultiSelect
					hideTags
					items={this.items}
					uniqueKey="id"
					ref={(component) => {
						this.multiSelect = component;
					}}
					onSelectedItemsChange={this.onSelectedItemsChange}
					selectedItems={selectedItems}
					selectText={`Add ${this.props.type}`}
					searchInputPlaceholderText={`Search ${this.props.type} ...`}
					onChangeInput={(text) => console.log(text)}
					//altFontFamily="ProximaNova-Light"
					tagRemoveIconColor="black"
					tagBorderColor="#53a6af"
					tagTextColor="black"
					fontSize={18}
					//itemFontSize= {}
					//fixedHeight= {80}
					selectedItemTextColor="#CCC"
					selectedItemIconColor="#CCC"
					itemTextColor="black"
					displayKey="name"
					searchInputStyle={{ color: '#CCC', fontSize: 20 }}
					submitButtonColor="#53a6af"
					submitButtonText="Submit"
				/>
				<View>{this.multiSelect ? this.multiSelect.getSelectedItemsExt(selectedItems) : null}</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
        backgroundColor:'#c3dadd',
		borderRadius:5,
		borderColor:'white',
		borderWidth:1,
        alignSelf:'center',
		paddingBottom: 10,
		paddingTop:20,
		paddingLeft:10,
		paddingRight:10,
		width: 357,
		marginTop: 10,
		marginLeft:4,
		marginBottom:7
	}
})


export default FormMultiSelect;
