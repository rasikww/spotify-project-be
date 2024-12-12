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
import { SongsService } from './songs.service';
import { SongDTO } from './dto/song.dto';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService) {}
    @Get()
    findAll() {
        try {
            return this.songsService.findAll();
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
        return this.songsService.create(SongDTO);
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
