import React, { useState } from "react";

import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { VariablsRowsGroup } from "models/enums/variablsRowsGroup";

import useStyles from "./rowsGroupStyles";

interface Props {
	setGroupingRows: React.Dispatch<React.SetStateAction<boolean>>
	groupingRows: boolean
}

const RowsGroup: React.FC<Props> = (props) => {
	const { setGroupingRows, groupingRows } = props
	const { classes } = useStyles();
	const [selected] = useState<string>(groupingRows ? VariablsRowsGroup.ungroup : VariablsRowsGroup.group);

	const handleChange = (event: SelectChangeEvent) => {
		VariablsRowsGroup.group === event.target.value as string
			?
			setGroupingRows(false)
			:
			setGroupingRows(true)
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
				<MenuItem
					className={classes.menuItem}
					value={VariablsRowsGroup.group}>
					{VariablsRowsGroup.group}
				</MenuItem>
				<MenuItem
					className={classes.menuItem}
					value={VariablsRowsGroup.ungroup}>
					{VariablsRowsGroup.ungroup}
				</MenuItem>
			</Select>
		</FormControl>
	);
};

export default React.memo(RowsGroup)

