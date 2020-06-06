import React, { useState } from 'react';
import { View, StyleSheet,TextInput } from 'react-native';
import FormInput from '../../components/genericComponents/FormInput';
import FormSubmitButton from '../genericComponents/FormSubmitButton';
import { connect } from 'react-redux';
import { Input } from 'react-native-elements';

const TaskForm = ({ oldTask, onSubmit, type }) => {
	const [task, setTask] = useState(oldTask);

	const validation = () => {
		if (task.name.length == 0) {
			alert('You must enter task name!');
		} else {
			onSubmit(task);
		}
	};

	return (
		<View style={styles.container}>
			<FormInput
				title=" Task Name "
				value={task.name}
				onChange={(name) => setTask({ ...task, name: name })}
				viewStyle={styles.task}
			/>
			<View style={styles.meetDesign}>
				<TextInput
					style={styles.input}
					multiline={true}
					autoGrow="true"
					placeholder=" Description"
					placeholderTextColor='#3b696e'
					value={task.description}
					onChangeText={(description) => setTask({ ...task, description: description })}
				/>
			</View>
			<FormSubmitButton onSubmit={() => validation()} type={type} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#e8f1f9',
		flex: 1,
	},
	meetDesign: {
		marginVertical: 2,
		flexDirection: 'row',
		fontWeight: 'bold',
		fontSize: 20,
	},
	task: {
		marginVertical: 2,
		flexDirection: 'row',
		fontWeight: 'bold',
		fontSize: 20,
	},
	input: {
		marginTop: 7,
		marginBottom: 7,
		marginRight: 15,
		marginLeft: 18,
		borderWidth: 1,
		borderColor: 'white',
		backgroundColor: '#c3dadd',
		borderRadius: 5,
		flex: 1,
		fontSize: 20,
		height: 200,
		alignSelf: 'center',
		textAlignVertical: 'top',
	},
	image: {
		marginVertical: 30,
		height: 60,
		width: 150,
		borderRadius: 10,
		alignSelf: 'center',
	},
	schedj: {
		height: 400,
		width: 370,
		alignSelf: 'center',
	},
	text: {
		fontSize: 20,
		marginRight: 10,
		marginTop: 8,
		marginBottom: 10,
		color: 'black',
	},
});

const mapStateToProps = (state) => {
	return { projects: state.projects };
};

export default connect(mapStateToProps, null)(TaskForm);
