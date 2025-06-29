import { Module } from '@nestjs/common';
import { MenusService } from './menus.service';
import { MenusController } from './menus.controller';
import { MenuSchema } from './schemas/menu.schema';
import { Menu } from './schemas/menu.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Menu.name, schema: MenuSchema }])],  
  controllers: [MenusController],
  providers: [MenusService],
})
export class MenusModule {}
