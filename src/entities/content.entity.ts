/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne } from "typeorm";
import { EntityBase } from "./entityBase";
//import { ContentType } from "../../../backend-refresher-1.0-dtos/src/enums/contentType.enum"
import { User } from "./user.entity";
//import { UserDto } from "../../../backend-refresher-1.0-dtos/src/dtos/user.dto";

@Entity()
export class Content extends EntityBase {
    
    
}
