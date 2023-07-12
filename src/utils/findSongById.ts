import Song from 'models/interface/song';

const findSongNameById = (songs: Song[], songId: string) => {
    const song: Song = songs.find((song) => song.id === songId)!;
    return song.name;
};

export default findSongNameById;
