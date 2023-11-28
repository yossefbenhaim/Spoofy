import { RFeatureUIEvent } from 'rlayers';

export const zoomInLocation = (event: RFeatureUIEvent) => {
    event.map.getView().fit(event.target.getGeometry()?.getExtent()!, {
        duration: 1000,
        maxZoom: 15,
    });
};
