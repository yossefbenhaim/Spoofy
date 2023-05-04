interface Song {
    id: string;
    name: string;
    duration: number;
    artistByArtistId: {
        name: string;
    };
}

export default Song;
