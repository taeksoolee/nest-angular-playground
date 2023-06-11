import { Injectable } from '@nestjs/common';

@Injectable({

})
export class CatsService {
  findAll() {
    return [
      {
        id: 0,
        name: 'kitty',
      },
      {
        id: 1,
        name: 'my cats',
      },
    ];
  }
}
