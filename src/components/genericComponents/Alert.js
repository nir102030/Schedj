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
			// contentContainerStyle ={{height: '100%', width: '100%'}}
			// overlayStyle={{	height: '400%', width: '300%'}}
			// contentStyle={{height: '100%', width: '100%'}}
			// alertContainerStyle={{height: '100%', width: '100%'}}
			// actionContainerStyle={{height: '50%', width: '100%'}}
		/>
	);
};

export default Alert;
