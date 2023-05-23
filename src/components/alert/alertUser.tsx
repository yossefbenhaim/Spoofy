import React from 'react';

import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

export interface State extends SnackbarOrigin {
	open: boolean;
}

interface Props {
	setState: (value: React.SetStateAction<State>) => void;
	state: State
	massege: string
}

const AlertUser: React.FC<Props> = (props) => {

	const { setState, state, massege } = props
	const { vertical, horizontal, open } = state;
	const AlertPopup = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
		props,
		ref,
	) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
	});

	const handleClose = () =>
		setState({ ...state, open: false });


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