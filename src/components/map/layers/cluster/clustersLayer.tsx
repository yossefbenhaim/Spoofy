import { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";
import { Icon, Style } from "ol/style";
import { useAppSelector } from "redux/store";
import { RFeature, RLayerCluster } from "rlayers";

import locationIcon from '@assets/location.svg'

const style = new Style({
	image: new Icon({
		src: locationIcon,
		scale: 0.8,
	}),
})

const ClustersLayer = () => {
	const users = useAppSelector((state) => state.users.users);

	return (
		<RLayerCluster
			zIndex={10}
			distance={25}
			style={style}
		>
			<>
				{users.map((user) => (
					<RFeature
						key={JSON.stringify(user.id)}
						geometry={new Point(fromLonLat(user.coordinates))}
					/>
				))}
			</>
		</RLayerCluster>
	);
}
export default ClustersLayer