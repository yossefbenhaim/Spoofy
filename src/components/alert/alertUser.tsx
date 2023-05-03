import * as React from 'react';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

export interface State extends SnackbarOrigin {
	open: boolean;
}

interface Props {
	setState: (value: React.SetStateAction<State>) => void;
	state: State
}

const AlertUser: React.FC<Props> = (props) => {
	const { setState, state } = props
	const { vertical, horizontal, open } = state;

	const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
		props,
		ref,
	) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
	});

	const handleClose = () => {
		setState({ ...state, open: false });
	};

	return (
		<div>
			<Snackbar anchorOrigin={{ vertical, horizontal }}
				open={open}
				onClose={handleClose}
				key={vertical + horizontal}>
				<Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
					אתה חייב לבחור משתמש
				</Alert>
			</Snackbar>
		</div>
	);
}

export default AlertUser;