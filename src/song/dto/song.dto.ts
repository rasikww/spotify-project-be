import { Transform } from 'class-transformer';
import {
    IsArray,
    IsDateString,
    IsInt,
    IsNotEmpty,
    IsString,
    Min,
} from 'class-validator';
import { durationToSeconds } from 'src/common/utility/duration.utility';

export class SongDTO {
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    readonly artists: string[];

    @IsNotEmpty()
    @IsDateString()
    readonly releaseDate: Date;

    @IsNotEmpty()
    @IsInt()
    @Min(0)
    @Transform(
        ({ value }) => {
            if (typeof value === 'string') {
                return durationToSeconds(value);
            }
            if (typeof value === 'number') {
                return value;
            }
        },
        { toClassOnly: true, toPlainOnly: true },
    )
    readonly duration: string;
}
