import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  root(): any {
    return {message: 'Hello World'};
  }

  @Get('test')
  test(): string{
    return 'this is a test. did it work';
  }
}
