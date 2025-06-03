import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://admin:password123@localhost:27017/next-nest-app?authSource=admin'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
