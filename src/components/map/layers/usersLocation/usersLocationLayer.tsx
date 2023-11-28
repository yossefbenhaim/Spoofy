import { Point } from "ol/geom";
import { useRef } from "react";
import { fromLonLat } from "ol/proj";
import { RFeature, RLayerVector, RPopup, RStyle } from "rlayers";
import { useAppSelector } from "redux/store";
import { zoomInLocation } from "@utils/zoomLocation";

import locationIcon from '../../../../assets/location.svg'
import PopupCard from "components/map/popupCard/popupCard";

const UsersLocationLayer = () => {
	const users = useAppSelector((state) => state.users.users);
	const popup = useRef<RPopup>(null);
	users.map((u) => {
		console.log(u.coordinates);
	})

	return (
		<RLayerVector zIndex={10}>
			<RStyle.RStyle>
				<RStyle.RIcon scale={0.8} src={locationIcon} />
				<RStyle.RStroke color={'#0000ff'} width={2} />
			</RStyle.RStyle>
			<>
				{users.map((user) => (
					<RFeature
						onClick={(e) => zoomInLocation(e)}
						key={user.id}
						geometry={new Point(fromLonLat(user.coordinates))}
					>
						<RPopup ref={popup} positioning="bottom-center" trigger={"hover"} >
							<PopupCard key={user.id} coordinates={user.coordinates} firstName={user.firstName} lastName={user.lastName} />
						</RPopup>
					</RFeature>
				))}
			</>
		</RLayerVector >
	);
}

export default UsersLocationLayer;