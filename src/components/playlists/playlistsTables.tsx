import React from "react";
import { Playlist } from "models/interface/playlist";

import isEqual from "lodash/isEqual";
import PlaylistTable from "./playlistTable";

interface Props {
	handleClickOpen: (playlistId: Playlist | undefined) => void;
	playlists: Playlist[];
}

const PlaylistsTables: React.FC<Props> = (props) => {
	const { handleClickOpen, playlists } = props;

	return (
		<>
			{playlists.map((playlist) => (
				<PlaylistTable key={playlist.id} handleClickOpen={handleClickOpen} playlist={playlist} />
			))}
		</>
	);
}

export default React.memo(PlaylistsTables, (prevProps, nextProps) =>
	isEqual(prevProps.playlists, nextProps.playlists)
);
