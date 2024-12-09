import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService) {}
    @Get()
    findAll() {
        return this.songsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} song`;
    }

    @Post()
    create(@Body() CreateSongDTO: CreateSongDTO) {
        return this.songsService.create(CreateSongDTO);
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
