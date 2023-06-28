import GET_SONGS from 'queries/query/songs';
import { useQuery } from '@apollo/client';
import { setSongs } from 'redux/slice/songs';
import { useDispatch } from 'react-redux';
import Song from 'models/interface/song';
import GET_PLAYLIST from 'queries/query/playlists';
import { setPlaylists } from 'redux/slice/playlists';
import Playlist from 'models/interface/playlist';
import FAVORITES_BY_USER from 'queries/query/favoritesByUser';
import { useAppSelector } from 'redux/store';
import Favorite from 'models/interface/favorite';
import { setFavorites } from 'redux/slice/favorites';
import GET_ARTIST from 'queries/query/artists';

const getUseQuery = () => {
    const dispatch = useDispatch();
    const currentUser = useAppSelector((state) => state.currentUser.user);

    useQuery(FAVORITES_BY_USER, {
        fetchPolicy: 'network-only',
        variables: {
            userId: currentUser?.id,
        },
        onCompleted: (data) => {
            const favoritesData: Favorite[] = data.allFavorites.nodes;
            dispatch(setFavorites(favoritesData));
        },
    });

    useQuery(GET_PLAYLIST, {
        fetchPolicy: 'network-only',
        onCompleted: (data) => {
            const playlistsSong = (
                data.allPlaylists.nodes as any[]
            ).map<Playlist>((songDB) => ({
                id: songDB.id,
                name: songDB.name,
                creatorId: songDB.creatorId,
                songs: songDB.playlistsongsByPlaylistId.nodes,
            }));
            dispatch(setPlaylists(playlistsSong));
        },
    });

    const parse_song = (songDB: any) => ({
        id: songDB.id,
        name: songDB.name,
        duration: songDB.duration,
        artist: songDB.artistByArtistId.name,
    });

    useQuery(GET_SONGS, {
        fetchPolicy: 'network-only',
        onCompleted: (data) => {
            const songsData = (data.allSongs.nodes as any[]).map<Song>(
                parse_song
            );
            dispatch(setSongs(songsData));
        },
    });
};

export default getUseQuery;
