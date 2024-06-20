import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    
    @IsNotEmpty()
    @IsString()
    user_id: string;
    
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsNotEmpty()
    @IsEmail()
    email: string;
}
