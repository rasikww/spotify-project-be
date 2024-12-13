import {
    IsArray,
    IsDateString,
    IsInt,
    IsNotEmpty,
    IsString,
    Min,
} from 'class-validator';

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
    readonly duration: number;
}
