import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { Review } from './schemas/review.schema';
import { ReviewSchema } from './schemas/review.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Review.name, schema: ReviewSchema }])],  
  controllers: [ReviewsController],
  providers: [ReviewsService],
})
export class ReviewsModule {}
