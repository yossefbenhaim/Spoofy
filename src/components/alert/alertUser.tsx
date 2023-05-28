import React, { useState } from 'react';

import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

export interface State extends SnackbarOrigin {
	open: boolean;
}

interface Props {
	setOpenAlert: (value: React.SetStateAction<State>) => void;
	openAlert: State
	massege: string

}

const AlertUser: React.FC<Props> = (props) => {
	const { massege, openAlert, setOpenAlert } = props

	const { vertical, horizontal, open } = openAlert;

	const AlertPopup = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
		props,
		ref,
	) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
	});

	const handleClose = () =>
		setOpenAlert({ ...openAlert, open: false });

	return (
		<Snackbar anchorOrigin={{ vertical, horizontal }}
			open={open}
			onClose={handleClose}
			key={vertical + horizontal}>
			<AlertPopup onClose={handleClose} severity="error">
				{massege}
			</AlertPopup>
		</Snackbar>
	);
}

export default AlertUser;