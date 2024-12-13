import { SongController } from './song/song.controller';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { SongModule } from './song/song.module';

@Module({
    imports: [SongModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        //consumer.apply(LoggerMiddleware).forRoutes('song');
        // consumer.apply(LoggerMiddleware).forRoutes(
        //     {
        //         path: 'song',
        //         method: RequestMethod.GET,
        //     },
        //     {
        //         path: 'song',
        //         method: RequestMethod.POST,
        //     },
        // );
        consumer.apply(LoggerMiddleware).forRoutes(SongController);
    }
}
