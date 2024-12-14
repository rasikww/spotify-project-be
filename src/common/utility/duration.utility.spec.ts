import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { Song } from 'src/song/entity/song.entity';
import { SongDTO } from 'src/song/dto/song.dto';
import { durationToSeconds, secondsToDuration } from './duration.utility';

describe('Duration Transformation', () => {
    it('should transform seconds to duration format', () => {
        // Create a DTO instance with seconds
        const TrackDTO = {
            id: '1',
            title: 'Test Track',
            artists: ['Artist 1', 'Artist 2'],
            duration: 300, // 5 minutes
            releaseDate: new Date('2022-01-01'),
        };

        // Transform the plain DTO object to a Entity class instance
        const transformedTrack = plainToClass(Song, TrackDTO, {
            enableImplicitConversion: true,
        });

        // Check the transformation
        expect(transformedTrack.duration).toBe('00:05:00');
    });

    it('should transform duration back to seconds', () => {
        const trackFromDb = {
            id: '2',
            title: 'Test Track',
            artists: ['Artist 1', 'Artist 2'],
            releaseDate: new Date('2022-01-01'),
            duration: '00:06:35',
        };

        // Transform the plain entity object to a DTO class instance
        const transformedTrack = plainToClass(SongDTO, trackFromDb, {
            enableImplicitConversion: true,
        });

        // Check the transformation
        expect(transformedTrack.duration).toBe(395);
    });

    it('should work correctly seconds to duration function', () => {
        const seconds = 500;
        const duration = secondsToDuration(seconds);

        expect(duration).toBe('00:08:20');
    });

    it('should work correctly duration to seconds function', () => {
        const duration = '00:06:40';
        const seconds = durationToSeconds(duration);

        expect(seconds).toBe(400);
    });
});
