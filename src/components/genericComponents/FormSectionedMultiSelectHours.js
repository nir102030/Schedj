import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

const FormSectionedMultiSelectHours = ({ addHoursToMeeting, hours }) => {
	const [selectedItems, setSelectedItems] = useState([]);
	const [items, setItems] = useState(hours);

	onSelectedItemsChange = (selectedItems) => {
		setSelectedItems(selectedItems);
		addHoursToMeeting(selectedItems);
	};
	useEffect(() => {
		setItems(hours);
	}, [hours]);
	return (
		<View>
			<SectionedMultiSelect
				items={items}
				uniqueKey="id"
				subKey="children"
				selectText="Pick Hours"
				showDropDowns={true}
				showCancelButton={true}
				showChips={false}
				searchPlaceholderText=""
				alwaysShowSelectText={false}
				readOnlyHeadings={true}
				onSelectedItemsChange={onSelectedItemsChange}
				selectedItems={selectedItems}
				showDropDowns={false}
				expandDropDowns={true}
				hideSearch={true}
				colors={{
					selectToggleTextColor: 'black',
					primary: '#455a64',
					itemBackground: '#a8cfd3',
					subItemBackground: '#ffffff',
					chipColor: '#ffffff',
				}}
				styles={{
					selectToggleText: {
						fontSize: 16,
						// marginLeft: 10,
						// paddingLeft: 10,
						fontWeight: 'bold',
					},
					selectToggle: {
						height: 35,
						alignSelf: 'stretch',
						flex: 1,
					},
					modalWrapper: {
						width: '75%',
						maxHeight: '80%',
						alignSelf: 'center',
						marginTop: '40%',
						backgroundColor: 'transparent',
					},
					chipContainer: {
						alignSelf: 'stretch',
						flex: 1,
					},
					chipsText: {},
					chipsWrapper: {
						alignItems: 'flex-end',
						height: 40,
					},
					parentChipContainer: {
						alignItems: 'flex-end',
					},
				}}
				single={true}
			/>
		</View>
	);
};

export default FormSectionedMultiSelectHours;
