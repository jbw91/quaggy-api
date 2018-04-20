import { HttpStatus, HttpException } from '@nestjs/common';

export class TeamNameExeption extends HttpException {
  constructor(name: string) {
    super(`Team name '${name}' already exists`, HttpStatus.BAD_REQUEST);
  }
}
