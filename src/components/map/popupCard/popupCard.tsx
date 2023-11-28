import { Card, CardContent, Typography } from "@mui/material"
import { useEffect, useState } from "react"

import useStyles from "./popupCardStyles"

interface Props {
	firstName: string
	lastName: string
	coordinates: number[]
}

const PopupCard: React.FC<Props> = (props) => {
	const { firstName, lastName, coordinates } = props
	const { classes } = useStyles()
	const [location, setLocation] = useState<string>()

	const fillAddress = (coordinates: number[]): Promise<string> => {
		if (coordinates === null) return Promise.resolve("");
		const URL = `https://nominatim.openstreetmap.org/reverse?format=json&lon=${coordinates[0]}&lat=${coordinates[1]}`;
		return fetch(URL)
			.then((r) => r.json())
			.then((data) => data.display_name)
			.catch((e) => e.message);
	}

	useEffect(() => {
		fillAddress(coordinates).then((address) => {
			setLocation(address)
		})
	}, [coordinates])

	return (
		<Card className={classes.cardContainer}>
			<CardContent>
				<Typography  >
					{`${firstName}  ${lastName}  😀`}
				</Typography>
				<Typography className={classes.content} >
					{`${location}`}
				</Typography>
			</CardContent>
		</Card>
	)
}

export default PopupCard