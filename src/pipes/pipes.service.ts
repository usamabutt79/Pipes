import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRoomDTO } from './pipes.controller';
import { Room, RoomDocument } from './room.schema';

@Injectable()
export class Pipes {
    constructor(@InjectModel(Room.name) private RoomModel: Model<RoomDocument>){}

    async addHotel(RoomData: CreateRoomDTO){
        const hotel = await this.RoomModel.create(RoomData)
        return hotel;
    }

    async findOne(m_id: number){
        return await this.RoomModel.findOne({m_id});
    }

}
