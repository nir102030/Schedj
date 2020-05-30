import React, { useState } from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';

const Alert = ({ showAlert, message, onConfirm, onCancel }) => {
	return (
		<AwesomeAlert
			show={showAlert}
			showProgress={false}
			message={message}
			closeOnTouchOutside={false}
			closeOnHardwareBackPress={false}
			showCancelButton={true}
			showConfirmButton={true}
			cancelText="No, cancel"
			confirmText="Yes, do it!"
			confirmButtonColor="#DD6B55"
			onCancelPressed={onCancel}
			onConfirmPressed={onConfirm}
		/>
	);
};

export default Alert;
