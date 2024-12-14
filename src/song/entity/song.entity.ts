import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { secondsToDuration } from 'src/common/utility/duration.utility';
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
        ({ value }) => {
            return secondsToDuration(value);
        },
        { toClassOnly: true, toPlainOnly: true },
    )
    duration: string;

    @Column({ type: 'text' })
    @IsOptional() //TODO remove optional
    lyrics: string;

    @Column({ type: 'date' })
    releaseDate: Date;

    @Column({ type: 'text' })
    @IsOptional() //TODO remove optional
    file_path: string;
}
