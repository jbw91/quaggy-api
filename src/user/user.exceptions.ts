import { HttpException, HttpStatus } from '@nestjs/common';

export class UserUsernameException extends HttpException {
  constructor(username: string) {
    super(`Username '${username}' has already been taken`, HttpStatus.BAD_REQUEST);
  }
}

export class UserEmailException extends HttpException {
  constructor(email: string) {
    super(`Email '${email}' has already been taken`, HttpStatus.BAD_REQUEST);
  }
}
