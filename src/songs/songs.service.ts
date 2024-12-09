import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
    //local db an array
    private readonly songs = [];

    create(song) {
        //TODO save the song in the db
        this.songs.push(song);
    }

    findAll() {
        //TODO get the songs from the db
        return this.songs;
    }
}
