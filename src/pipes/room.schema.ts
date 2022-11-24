import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose'

export type RoomDocument = Room & Document
@Schema()
export class Room{

    @Prop()
    m_id: string;

    @Prop()
    name: string;

    @Prop()
    designation: string;

    
}

export const RoomSchema = SchemaFactory.createForClass(Room);