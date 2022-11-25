import {HttpStatus} from "@nestjs/common";

export interface UserValueController<T> {
  result?: T;
  errors?: string[];
  status: HttpStatus;
}