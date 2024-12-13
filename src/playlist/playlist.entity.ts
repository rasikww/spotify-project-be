import { Song } from '../song/entity/song.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('playlist')
export class Playlist {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    //@OneToMany(() => Song, (song) => song.playlist)
    songs: Song[];
}
