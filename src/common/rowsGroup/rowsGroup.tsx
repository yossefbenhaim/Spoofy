import React from "react";

import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import useStyles from "./rowsGroupStyles";
enum VariablsRowsGroup {
	group = 'מקובץ לפי זמר',
	ungroup = 'ללא קיבוץ'
}

const RowsGroup: React.FC = () => {
	const { classes } = useStyles();
	const [selected, setSelected] = React.useState(VariablsRowsGroup.ungroup as string);

	const handleChange = (event: SelectChangeEvent) => {
		setSelected(event.target.value as string);
	};


	return (
		<FormControl className={classes.formControl} fullWidth>

			<Select
				className={classes.select}
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={selected}
				label="Age"
				onChange={handleChange}
			>
				<MenuItem className={classes.menuItem} value={VariablsRowsGroup.group}>{VariablsRowsGroup.group}</MenuItem>
				<MenuItem className={classes.menuItem} value={VariablsRowsGroup.ungroup}>{VariablsRowsGroup.ungroup}</MenuItem>
			</Select>
		</FormControl>
	);
};

export default RowsGroup;
