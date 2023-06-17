import { Dog } from '../entities/dog.entity';

export class CreateDogDto {
  name: string;

  toDog() {
    const dog = new Dog();
    dog.name = this.name;
    return dog;
  }
}
