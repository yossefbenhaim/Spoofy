import "ol/ol.css";
import "rlayers/control/layers.css";

import { fromLonLat, transform } from "ol/proj";
import { RControl, RMap, ROSMWebGL, useOL, } from "rlayers";

import MyLocationIcon from '@mui/icons-material/MyLocation';
import UsersLocationLayer from "./layers/usersLocation/usersLocationLayer";
import useStyles from "./mapStyles";
import { IconButton } from "@mui/material";


const ISRAEL_CENTER_COORDS = fromLonLat([35.0818155, 31.4117257]);
const ISRAEL_DEFAULT_ZOOM = 6.8;

const Map = () => {
	const { classes } = useStyles()
	const olMap = useOL()

	function CenterMap() {
		olMap.map.getView().setCenter(transform([35.0818155, 31.4117257], 'EPSG:4326', 'EPSG:3857'));
		olMap.map.getView().setZoom(5);
	}
	return (
		<>
			<RMap
				width={"100%"}
				height={"60vh"}
				initial={{
					center: ISRAEL_CENTER_COORDS,
					zoom: ISRAEL_DEFAULT_ZOOM,

				}}
				noDefaultControls
				className="h-full"

			>
				<ROSMWebGL />
				<RControl.RScaleLine />
				<RControl.RZoom />
				<RControl.RZoomSlider />
				<UsersLocationLayer />
				<RControl.RCustom className={classes.customControl}>
					<IconButton onClick={() => CenterMap()}>
						<MyLocationIcon />
					</IconButton>
				</RControl.RCustom>
			</RMap>
		</>

	);
}
export default Map