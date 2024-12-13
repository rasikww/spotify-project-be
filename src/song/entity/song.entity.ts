import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import {
    durationToSeconds,
    secondsToDuration,
} from 'src/common/utility/duration.utility';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('song')
export class Song {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar' })
    title: string;

    @Column({ type: 'varchar', array: true })
    artists: string[];

    @Column({ type: 'time' })
    @Transform(
        ({ value }) =>
            typeof value === 'number'
                ? secondsToDuration(value)
                : durationToSeconds(value),
        { toClassOnly: true, toPlainOnly: true },
    )
    duration: string;

    @Column({ type: 'text' })
    @IsOptional()
    lyrics: string;

    @Column({ type: 'date' })
    @IsOptional()
    releaseDate: Date;

    @Column({ type: 'text' })
    @IsOptional()
    file_path: string;
}
