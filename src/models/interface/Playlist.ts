import SongsId from './songId';
interface Playlist {
    id: string;
    name: string;
    creatorId: string;
    songs: SongsId[];
}

export default Playlist;
