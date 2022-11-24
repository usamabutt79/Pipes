import { Body, Controller, Post, Get, Query} from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { Pipes } from './pipes.service';


export class CreateRoomDTO {
    m_id: string;
    name: string;
    designation: string;
}

@Controller('pipes')
export class PipesController {

    constructor(private readonly PipesService: Pipes) {}

    @Post('create')
    async create(@Body() CreateRoomDTO: CreateRoomDTO) {
        const u=await this.PipesService.addHotel(CreateRoomDTO)
        return u
    }

    @Get('findOne')
    async getOne(@Query('m_id', ParseIntPipe) m_id: number){
        console.log(typeof m_id);
        return await this.PipesService.findOne(m_id);
  }



}


