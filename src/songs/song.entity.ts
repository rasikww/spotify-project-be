import { Playlist } from './../playlists/playlist.entity';
export class Song {
    id: number;
    name: string;
    playlist: Playlist;
}
