import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Pipes } from './pipes/pipes.service';
import { PipesController } from './pipes/pipes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Room, RoomSchema } from './pipes/room.schema';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://usamabutt786:18134156-079@cluster0.ajmez0k.mongodb.net/Pipes'),
  MongooseModule.forFeature([{name: Room.name, schema: RoomSchema}])],
  controllers: [AppController, PipesController],
  providers: [AppService, Pipes],
})
export class AppModule {}
