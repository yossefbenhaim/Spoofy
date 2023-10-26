import findSongNameById from '../utils/findSongById';
import { Song } from '../models/interface/song';

const songs: Song[] = [
    { id: '1', name: 'Song 1', duration: 180, artist: 'Artist 1' },
    { id: '2', name: 'Song 2', duration: 210, artist: 'Artist 2' },
    { id: '3', name: 'Song 3', duration: 150, artist: 'Artist 3' },
];

test('findSongNameById should find the song name by ID', () => {
    const songId = '2';
    const songName = findSongNameById(songs, songId);
    expect(songName).toBe('Song 2');
});

test('findSongNameById should handle non-existent song ID', () => {
    const songId = '4';
    const songName = findSongNameById(songs, songId);
    expect(songName).toBeUndefined();
});

test('findSongNameById should handle an empty songs array', () => {
    const songId = '1';
    const songName = findSongNameById([], songId);
    expect(songName).toBeUndefined();
});
