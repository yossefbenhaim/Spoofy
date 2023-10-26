import { Song } from 'models/interface/song';

const findSongNameById = (songs: Song[], songId: string) => {
    const song: Song = songs.find((song) => song.id === songId)!;
    return song ? song.name : undefined;
};

export default findSongNameById;
