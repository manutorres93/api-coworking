import { ApiProperty } from "@nestjs/swagger";
import {  IsNotEmpty, IsNumber} from "class-validator";

export class CreateReservationDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    user_id: number;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    workspace_id: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    session_id: number;

}