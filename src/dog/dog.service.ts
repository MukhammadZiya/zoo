import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  public getHello(): string {
    return 'WOWWOW';
  }

  public introduce(): string {
    return "My name is Jerry"
  }

  public modifyDetail(): string {
    return "Successfully Modified"
  }
}
