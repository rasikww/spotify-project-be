import {
    IsArray,
    IsDateString,
    IsInt,
    IsNotEmpty,
    IsString,
} from 'class-validator';

export class CreateSongDTO {
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    readonly artists: string[];

    @IsNotEmpty()
    @IsDateString()
    readonly releasedDate: Date;

    @IsNotEmpty()
    @IsInt()
    readonly duration: number;
}
