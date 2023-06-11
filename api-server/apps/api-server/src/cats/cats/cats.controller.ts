import { Controller, Get } from '@nestjs/common';
import { first, from, of, take } from 'rxjs';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll() {
    const cats = this.catsService.findAll();
    return cats;
  }
}
``