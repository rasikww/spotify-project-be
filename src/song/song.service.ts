import { Injectable } from '@nestjs/common';

@Injectable()
export class SongService {
    //local db an array
    //TODO add connection to db
    private readonly songs = [];

    create(song) {
        //TODO save the song in the db
        this.songs.push(song);
    }

    findAll() {
        //TODO get the songs from the db
        // throw new Error('this is a created error');
        this.songs.forEach((val) => console.log(val));
        return this.songs;
    }
}
