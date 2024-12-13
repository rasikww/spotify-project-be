import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { SongService } from './song.service';
import { SongDTO } from './dto/song.dto';

@Controller('song')
export class SongController {
    constructor(private songService: SongService) {}
    @Get()
    findAll() {
        try {
            return this.songService.findAll();
        } catch (error) {
            throw new HttpException(
                'Server Error',
                HttpStatus.INTERNAL_SERVER_ERROR,
                {
                    cause: error,
                },
            );
        }
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${typeof id} song`;
    }

    @Post()
    create(@Body() SongDTO: SongDTO) {
        return this.songService.create(SongDTO);
    }

    @Put(':id')
    update(@Param('id') id: string) {
        return `This action updates #${id} song`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes #${id} song`;
    }
}
